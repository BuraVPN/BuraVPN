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

type NetBirdState struct {
	Connected bool   `json:"connected"`
	IP        string `json:"ip,omitempty"`
}

type ExitNodeStatus struct {
	Reachable bool    `json:"reachable"`
	Target    string  `json:"target,omitempty"`
	Latency   float64 `json:"latency,omitempty"`
}

type PingResult struct {
	Success    bool    `json:"success"`
	PacketLoss float64 `json:"packetLoss"`
	AvgLatency float64 `json:"avgLatency,omitempty"`
}

type HeartbeatData struct {
	RouterID         string          `json:"routerId"`
	Status           string          `json:"status"`
	Timestamp        string          `json:"timestamp"`
	NetBirdState     *NetBirdState   `json:"netbirdState"`
	TunnelUp         bool            `json:"tunnelUp"`
	ExitNode         *ExitNodeStatus `json:"exitNode,omitempty"`
	PingResult       *PingResult     `json:"pingResult,omitempty"`
	RequestBackCheck bool            `json:"requestBackCheck,omitempty"`
	BackCheckResult  *PingResult     `json:"backCheckResult,omitempty"`
}

type ServerResponse struct {
	Success         bool   `json:"success"`
	Message         string `json:"message"`
	ShouldBackCheck bool   `json:"shouldBackCheck,omitempty"`
	CheckTarget     string `json:"checkTarget,omitempty"`
}

const (
	serverURL        = "http://<server_ip>/api/heartbeat"
	interval         = 10 * time.Second
	routerID         = "travel-router"
	homeRouterIP     = "<netbird_exit_node_ip>" 
	netbirdStateFile = "/tmp/lib/netbird/state.json"
	primaryDNS       = "8.8.8.8"    
	fallbackDNS      = "1.1.1.1"    
)

func checkNetBirdState() *NetBirdState {
	data, err := os.ReadFile(netbirdStateFile)
	if err != nil {
		log.Printf("Failed to read state file: %v", err)
		return &NetBirdState{Connected: false}
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

	if err := json.Unmarshal(data, &state); err != nil {
		log.Printf("Failed to parse state file: %v", err)
		return &NetBirdState{Connected: false}
	}

	if state.IptablesState != nil && state.IptablesState.InterfaceState.WgAddress.IP != "" {
		return &NetBirdState{
			Connected: true,
			IP:        state.IptablesState.InterfaceState.WgAddress.IP,
		}
	}

	return &NetBirdState{Connected: false}
}

func checkExitNode() *ExitNodeStatus {
	result := pingThroughTunnel(primaryDNS)
	if result.Success && result.PacketLoss < 100.0 {
		return &ExitNodeStatus{
			Reachable: true,
			Target:    primaryDNS,
			Latency:   result.AvgLatency,
		}
	}

	result = pingThroughTunnel(fallbackDNS)
	if result.Success && result.PacketLoss < 100.0 {
		return &ExitNodeStatus{
			Reachable: true,
			Target:    fallbackDNS,
			Latency:   result.AvgLatency,
		}
	}

	return &ExitNodeStatus{
		Reachable: false,
	}
}

func checkInterface() bool {
	cmd := exec.Command("ip", "link", "show", "wt0")
	err := cmd.Run()
	return err == nil
}

func pingThroughTunnel(ip string) *PingResult {
	cmd := exec.Command("ping", "-c", "2", "-W", "2", "-I", "wt0", ip)
	output, err := cmd.Output()
	
	result := &PingResult{
		Success:    err == nil,
		PacketLoss: 100.0, 
	}
	
	if err != nil {
		return result
	}
	
	lines := strings.Split(string(output), "\n")
	for _, line := range lines {
		if strings.Contains(line, "packet loss") {
			fields := strings.Fields(line)
			for i, field := range fields {
				if strings.HasSuffix(field, "%") && i > 0 {
					lossStr := strings.TrimSuffix(field, "%")
					if loss, err := parseFloat(lossStr); err == nil {
						result.PacketLoss = loss
					}
					break
				}
			}
		}
		
		if strings.Contains(line, "rtt") || strings.Contains(line, "round-trip") {
			fields := strings.Fields(line)
			for i, field := range fields {
				if field == "=" && i+1 < len(fields) {
					stats := strings.Split(fields[i+1], "/")
					if len(stats) >= 2 {
						if avg, err := parseFloat(stats[1]); err == nil {
							result.AvgLatency = avg
						}
					}
					break
				}
			}
		}
	}
	
	return result
}

func parseFloat(s string) (float64, error) {
	var f float64
	_, err := fmt.Sscanf(s, "%f", &f)
	return f, err
}

func sendHeartbeat(backCheckTarget string) (*ServerResponse, error) {
	netbirdState := checkNetBirdState()

	pingResult := pingThroughTunnel(homeRouterIP)
	tunnelUp := pingResult.Success && pingResult.PacketLoss < 100.0

	var exitNode *ExitNodeStatus
	if netbirdState.Connected && tunnelUp {
		exitNode = checkExitNode()
	}

	routerStatus := "online"
	if !netbirdState.Connected {
		routerStatus = "netbird_down"
	} else if !tunnelUp {
		routerStatus = "tunnel_down"
	} else if exitNode != nil && !exitNode.Reachable {
		routerStatus = "exit_node_down"
	} else if pingResult.PacketLoss > 0 {
		routerStatus = "degraded"
	}

	data := HeartbeatData{
		RouterID:         routerID,
		Status:           routerStatus,
		Timestamp:        time.Now().UTC().Format(time.RFC3339),
		NetBirdState:     netbirdState,
		TunnelUp:         tunnelUp,
		ExitNode:         exitNode,
		PingResult:       pingResult,
		RequestBackCheck: netbirdState.Connected && !tunnelUp, 
	}

	if backCheckTarget != "" {
		backCheckResult := pingThroughTunnel(backCheckTarget)
		data.BackCheckResult = backCheckResult
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal JSON: %w", err)
	}

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Post(serverURL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("server returned status: %d", resp.StatusCode)
	}

	var serverResp ServerResponse
	if err := json.NewDecoder(resp.Body).Decode(&serverResp); err != nil {
		return nil, fmt.Errorf("failed to decode response: %w", err)
	}

	statusEmoji := "✓"
	if !netbirdState.Connected {
		statusEmoji = "✗"
	} else if !tunnelUp {
		statusEmoji = "⚠"
	} else if exitNode != nil && !exitNode.Reachable {
		statusEmoji = "⚠"
	} else if pingResult.PacketLoss > 0 && pingResult.PacketLoss < 100 {
		statusEmoji = "⚡"
	}
	
	exitStatus := "N/A"
	if exitNode != nil {
		if exitNode.Reachable {
			exitStatus = fmt.Sprintf("✓ via %s (%.1fms)", exitNode.Target, exitNode.Latency)
		} else {
			exitStatus = "✗ unreachable"
		}
	}
	
	log.Printf("%s Heartbeat | NetBird: %v (%s) | Tunnel: %v | Exit: %s | Loss: %.0f%% | Status: %s", 
		statusEmoji,
		netbirdState.Connected,
		netbirdState.IP,
		tunnelUp,
		exitStatus,
		pingResult.PacketLoss,
		routerStatus)
	
	return &serverResp, nil
}

func main() {
	log.Printf("Starting heartbeat client for router: %s", routerID)
	log.Printf("Server URL: %s", serverURL)
	log.Printf("Home router IP: %s", homeRouterIP)
	log.Printf("Interval: %v", interval)

	resp, err := sendHeartbeat("")
	if err != nil {
		log.Printf("✗ Error sending initial heartbeat: %v", err)
	}

	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for range ticker.C {
		backCheckTarget := ""
		if resp != nil && resp.ShouldBackCheck {
			backCheckTarget = resp.CheckTarget
			log.Printf("→ Server requested back-check to %s", backCheckTarget)
		}

		resp, err = sendHeartbeat(backCheckTarget)
		if err != nil {
			log.Printf("✗ Error sending heartbeat: %v", err)
		}
	}
}