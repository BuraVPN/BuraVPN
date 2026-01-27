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
	serverURL        = "http://<server_ip>/api/heartbeat"
	interval         = 5 * time.Second
	routerID         = "travel-router"
	exitNodeIP       = "<netbird_exit_node_ip>"
	netbirdStateFile = "/tmp/lib/netbird/state.json"
)

type Heartbeat struct {
	RouterID   string  `json:"routerId"`
	Timestamp  string  `json:"timestamp"`
	NetbirdIP  string  `json:"netbirdIp,omitempty"`
	TunnelUp   bool    `json:"tunnelUp"`
	PacketLoss float64 `json:"packetLoss"`
	LatencyMs  float64 `json:"latencyMs,omitempty"`
}

func main() {
	log.Printf("Starting heartbeat: router=%s, interval=%v", routerID, interval)

	for {
		send()
		time.Sleep(interval)
	}
}

func send() {
	hb := Heartbeat{
		RouterID:  routerID,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}

	hb.NetbirdIP = getNetbirdIP()

	if hb.NetbirdIP != "" {
		hb.TunnelUp, hb.PacketLoss, hb.LatencyMs = pingViaTunnel(exitNodeIP)
	}

	data, _ := json.Marshal(hb)
	resp, err := http.Post(serverURL, "application/json", bytes.NewBuffer(data))
	if err != nil {
		log.Printf("✗ Send failed: %v", err)
		return
	}
	resp.Body.Close()

	status := "✗ offline"
	if hb.TunnelUp {
		status = "✓ online"
	} else if hb.NetbirdIP != "" {
		status = "⚠ tunnel down"
	}
	log.Printf("%s | ip=%s loss=%.0f%% latency=%.1fms", status, hb.NetbirdIP, hb.PacketLoss, hb.LatencyMs)
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