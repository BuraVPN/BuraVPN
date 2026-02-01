package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"sync"
	"time"
)

const (
	configFile       = "/etc/heartbeat/config.json"
	netbirdStateFile = "/tmp/lib/netbird/state.json"
	interval         = 5 * time.Second
)

type Config struct {
	PeerID    string `json:"peerId"`
	ServerURL string `json:"serverUrl"`
}

var config Config

type Heartbeat struct {
	RouterID     string       `json:"routerId"`
	Timestamp    string       `json:"timestamp"`
	NetbirdIP    string       `json:"netbirdIp,omitempty"`
	TunnelUp     bool         `json:"tunnelUp"`
	PacketLoss   float64      `json:"packetLoss"`
	LatencyMs    float64      `json:"latencyMs,omitempty"`
	TunnelStatus []TunnelPing `json:"tunnelStatus,omitempty"`
}

type TunnelPing struct {
	TunnelID   string  `json:"tunnelId"`
	PeerIP     string  `json:"peerIp"`
	Up         bool    `json:"up"`
	PacketLoss float64 `json:"packetLoss"`
	LatencyMs  float64 `json:"latencyMs"`
}

type HeartbeatResponse struct {
	OK        bool           `json:"ok"`
	PeerFound bool           `json:"peerFound"`
	Tunnels   []TunnelConfig `json:"tunnels"`
}

type TunnelConfig struct {
	TunnelID      string   `json:"tunnelId"`
	Role          string   `json:"role"`
	TunnelPeerIPs []string `json:"tunnelPeerIps"`
}

var (
	activeTunnels []TunnelConfig
	appliedRole   string
	mu            sync.Mutex
)


func getWANBindAddr() (string, error) {
	out, err := exec.Command("ip", "route", "show", "default").Output()
	if err != nil {
		return "", fmt.Errorf("ip route: %w", err)
	}

	for _, line := range strings.Split(strings.TrimSpace(string(out)), "\n") {
		if strings.Contains(line, "wt0") {
			continue
		}
		fields := strings.Fields(line)
		for i, f := range fields {
			if f == "src" && i+1 < len(fields) {
				return fields[i+1], nil
			}
		}
		for i, f := range fields {
			if f == "dev" && i+1 < len(fields) {
				return getIfaceIP(fields[i+1])
			}
		}
	}
	return "", fmt.Errorf("no non-VPN default route found")
}

func getIfaceIP(name string) (string, error) {
	iface, err := net.InterfaceByName(name)
	if err != nil {
		return "", err
	}
	addrs, err := iface.Addrs()
	if err != nil {
		return "", err
	}
	for _, a := range addrs {
		if ipnet, ok := a.(*net.IPNet); ok && ipnet.IP.To4() != nil {
			return ipnet.IP.String(), nil
		}
	}
	return "", fmt.Errorf("no IPv4 on %s", name)
}

func makeDirectClient() *http.Client {
	srcIP, err := getWANBindAddr()
	if err != nil {
		log.Printf("WAN bind: %v, using default client", err)
		return http.DefaultClient
	}

	log.Printf("Heartbeat binding to WAN: %s", srcIP)

	localAddr := net.ParseIP(srcIP)
	dialer := &net.Dialer{
		LocalAddr: &net.TCPAddr{IP: localAddr},
		Timeout:   5 * time.Second,
	}
	return &http.Client{
		Timeout: 10 * time.Second,
		Transport: &http.Transport{
			DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {
				return dialer.DialContext(ctx, network, addr)
			},
		},
	}
}


func main() {
	data, err := os.ReadFile(configFile)
	if err != nil {
		log.Fatalf("Failed to read config: %v", err)
	}
	if err := json.Unmarshal(data, &config); err != nil {
		log.Fatalf("Failed to parse config: %v", err)
	}
	if config.PeerID == "" || config.ServerURL == "" {
		log.Fatalf("Config missing required fields: peerId and serverUrl")
	}

	log.Printf("Starting heartbeat: peerId=%s", config.PeerID)

	client := makeDirectClient()

	refreshTicker := time.NewTicker(60 * time.Second)
	defer refreshTicker.Stop()

	for {
		select {
		case <-refreshTicker.C:
			client = makeDirectClient()
		default:
		}

		send(client)
		time.Sleep(interval)
	}
}


func send(client *http.Client) {
	hb := Heartbeat{
		RouterID:  config.PeerID,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}

	hb.NetbirdIP = getNetbirdIP()

	mu.Lock()
	tunnels := activeTunnels
	mu.Unlock()

	anyTunnelUp := false
	var totalLoss, totalLatency float64
	var pingCount int

	for _, t := range tunnels {
		for _, ip := range t.TunnelPeerIPs {
			up, loss, lat := pingViaTunnel(ip)
			hb.TunnelStatus = append(hb.TunnelStatus, TunnelPing{
				TunnelID:   t.TunnelID,
				PeerIP:     ip,
				Up:         up,
				PacketLoss: loss,
				LatencyMs:  lat,
			})
			if up {
				anyTunnelUp = true
			}
			totalLoss += loss
			totalLatency += lat
			pingCount++
		}
	}

	if pingCount > 0 {
		hb.TunnelUp = anyTunnelUp
		hb.PacketLoss = totalLoss / float64(pingCount)
		hb.LatencyMs = totalLatency / float64(pingCount)
	}

	start := time.Now()
	data, _ := json.Marshal(hb)
	resp, err := client.Post(config.ServerURL, "application/json", bytes.NewBuffer(data))
	latency := float64(time.Since(start).Milliseconds())

	if err != nil {
		_, netErr := http.Get("http://connectivitycheck.gstatic.com/generate_204")
		if netErr != nil {
			log.Printf("✗ No internet connection")
		} else {
			log.Printf("⚠ Internet OK, server unreachable: %v", err)
		}
		return
	}
	defer resp.Body.Close()

	var hbResp HeartbeatResponse
	if err := json.NewDecoder(resp.Body).Decode(&hbResp); err != nil {
		log.Printf("⚠ Failed to parse response: %v", err)
		return
	}

	applyTunnelConfig(hbResp.Tunnels)

	status := "✓"
	if len(tunnels) > 0 && !anyTunnelUp {
		status = "⚠ tunnel down"
	}
	log.Printf("%s | ip=%s tunnels=%d up=%v loss=%.0f%% latency=%.0fms",
		status, hb.NetbirdIP, len(tunnels), anyTunnelUp, hb.PacketLoss, latency)
}


func applyTunnelConfig(newTunnels []TunnelConfig) {
	mu.Lock()
	defer mu.Unlock()

	newRole := ""
	if len(newTunnels) > 0 {
		newRole = newTunnels[0].Role
	}

	if newRole == appliedRole && tunnelsMatch(activeTunnels, newTunnels) {
		return
	}

	if newRole == "" && appliedRole != "" {
		log.Printf("⚡ Tunnel removed, no longer in any tunnel")
		activeTunnels = nil
		appliedRole = ""
		return
	}

	if newRole != "" {
		mode := "travel"
		if newRole == "exit-node" {
			mode = "exit-node"
		}

		log.Printf("⚡ Applying tunnel config: role=%s mode=%s", newRole, mode)

		cmd := exec.Command("buravpn_networking", mode)
		out, err := cmd.CombinedOutput()
		if err != nil {
			log.Printf("✗ buravpn_networking failed: %v\n%s", err, string(out))
		} else {
			log.Printf("✓ buravpn_networking %s applied successfully", mode)
		}
	}

	activeTunnels = newTunnels
	appliedRole = newRole
}

func tunnelsMatch(a, b []TunnelConfig) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i].TunnelID != b[i].TunnelID || a[i].Role != b[i].Role {
			return false
		}
		if len(a[i].TunnelPeerIPs) != len(b[i].TunnelPeerIPs) {
			return false
		}
		for j := range a[i].TunnelPeerIPs {
			if a[i].TunnelPeerIPs[j] != b[i].TunnelPeerIPs[j] {
				return false
			}
		}
	}
	return true
}


func getNetbirdIP() string {
	data, err := os.ReadFile(netbirdStateFile)
	if err != nil {
		return ""
	}

	var state struct {
		IptablesState *struct {
			InterfaceState struct {
				WgAddress struct {
					IP string `json:"IP"`
				} `json:"wg_address"`
			} `json:"interface_state"`
		} `json:"iptables_state"`
	}

	if json.Unmarshal(data, &state) != nil || state.IptablesState == nil {
		return ""
	}
	return state.IptablesState.InterfaceState.WgAddress.IP
}


func pingViaTunnel(ip string) (up bool, loss, latency float64) {
	loss = 100.0

	out, err := exec.Command("ping", "-c", "2", "-W", "2", "-I", "wt0", ip).Output()
	if err != nil {
		return false, loss, 0
	}

	for _, line := range strings.Split(string(out), "\n") {
		if strings.Contains(line, "packet loss") {
			for _, f := range strings.Fields(line) {
				if strings.HasSuffix(f, "%") {
					var l float64
					if _, e := parseFloat(strings.TrimSuffix(f, "%"), &l); e == nil {
						loss = l
					}
				}
			}
		}
		if strings.Contains(line, "rtt") {
			if idx := strings.Index(line, "="); idx != -1 {
				parts := strings.Split(strings.Fields(line[idx+1:])[0], "/")
				if len(parts) >= 2 {
					parseFloat(parts[1], &latency)
				}
			}
		}
	}
	return loss < 100, loss, latency
}

func parseFloat(s string, f *float64) (int, error) {
	return fmt.Sscanf(s, "%f", f)
}