package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"strings"
	"time"
)

const (
	configFile       = "/etc/heartbeat/config.json"
	netbirdStateFile = "/tmp/lib/netbird/state.json"
	internetCheckIP  = "8.8.8.8"
	interval         = 5 * time.Second
)

type Config struct {
	PeerID     string `json:"peerId"`    
	ServerURL  string `json:"serverUrl"`  
	ExitNodeIP string `json:"exitNodeIp"` 
}

var config Config

type Heartbeat struct {
	RouterID    string  `json:"routerId"`
	Timestamp   string  `json:"timestamp"`
	NetbirdIP   string  `json:"netbirdIp,omitempty"`
	TunnelUp    bool    `json:"tunnelUp"`
	PacketLoss  float64 `json:"packetLoss"`
	LatencyMs   float64 `json:"latencyMs,omitempty"`
	InternetUp  bool    `json:"internetUp"`
	InternetMs  float64 `json:"internetMs,omitempty"`
}

func main() {
	data, err := os.ReadFile(configFile)
	if err != nil {
		log.Fatalf("Failed to read config: %v", err)
	}
	if err := json.Unmarshal(data, &config); err != nil {
		log.Fatalf("Failed to parse config: %v", err)
	}

	log.Printf("Starting heartbeat: peerId=%s, server=%s", config.PeerID, config.ServerURL)

	for {
		send()
		time.Sleep(interval)
	}
}

func send() {
	hb := Heartbeat{
		RouterID:  config.PeerID,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}

	hb.NetbirdIP = getNetbirdIP()

	if hb.NetbirdIP != "" && config.ExitNodeIP != "" {
		hb.TunnelUp, hb.PacketLoss, hb.LatencyMs = pingViaTunnel(config.ExitNodeIP)
	}

	hb.InternetUp, hb.InternetMs = pingDirect(internetCheckIP)

	data, _ := json.Marshal(hb)
	resp, err := http.Post(config.ServerURL, "application/json", bytes.NewBuffer(data))
	if err != nil {
		log.Printf("✗ Send failed: %v", err)
		return
	}
	resp.Body.Close()

	status := "✗ offline"
	if hb.TunnelUp && hb.InternetUp {
		status = "✓ online"
	} else if hb.TunnelUp && !hb.InternetUp {
		status = "⚠ no internet"
	} else if hb.NetbirdIP != "" {
		status = "⚠ tunnel down"
	}
	log.Printf("%s | ip=%s tunnel=%v internet=%v latency=%.1fms", status, hb.NetbirdIP, hb.TunnelUp, hb.InternetUp, hb.InternetMs)
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

func pingDirect(ip string) (up bool, latency float64) {
	out, err := exec.Command("ping", "-c", "2", "-W", "2", ip).Output()
	if err != nil {
		return false, 0
	}

	for _, line := range strings.Split(string(out), "\n") {
		if strings.Contains(line, "rtt") {
			if idx := strings.Index(line, "="); idx != -1 {
				parts := strings.Split(strings.Fields(line[idx+1:])[0], "/")
				if len(parts) >= 2 {
					parseFloat(parts[1], &latency)
				}
			}
		}
	}
	return true, latency
}