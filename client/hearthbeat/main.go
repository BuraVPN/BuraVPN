package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os/exec"
	"strings"
	"time"
)

type NetBirdStatus struct {
	Management  string `json:"management"`
	Signal      string `json:"signal"`
	NetBirdIP   string `json:"netbirdIp"`
	PeersCount  string `json:"peersCount"`
	IsConnected bool   `json:"isConnected"`
}

type HeartbeatData struct {
	RouterID    string         `json:"routerId"`
	Status      string         `json:"status"`
	Timestamp   string         `json:"timestamp"`
	PublicIP    string         `json:"publicIp,omitempty"`
	NetBird     *NetBirdStatus `json:"netbird,omitempty"`
}

const (
	serverURL = "http://192.168.8.131:3000/api/heartbeat"
	interval  = 10 * time.Second
	routerID  = "GL-SFT1200-001"
)

func getPublicIP() string {
	client := &http.Client{Timeout: 5 * time.Second}
	resp, err := client.Get("https://api.ipify.org?format=text")
	if err != nil {
		return ""
	}
	defer resp.Body.Close()

	buf := new(bytes.Buffer)
	buf.ReadFrom(resp.Body)
	return buf.String()
}

func getNetBirdStatus() *NetBirdStatus {
	cmd := exec.Command("netbird", "status")
	output, err := cmd.Output()
	if err != nil {
		log.Printf("Failed to get NetBird status: %v", err)
		return nil
	}

	status := &NetBirdStatus{
		Management:  "Unknown",
		Signal:      "Unknown",
		NetBirdIP:   "N/A",
		PeersCount:  "0/0",
		IsConnected: false,
	}

	lines := strings.Split(string(output), "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		
		if strings.HasPrefix(line, "Management:") {
			status.Management = strings.TrimSpace(strings.TrimPrefix(line, "Management:"))
		} else if strings.HasPrefix(line, "Signal:") {
			status.Signal = strings.TrimSpace(strings.TrimPrefix(line, "Signal:"))
		} else if strings.HasPrefix(line, "NetBird IP:") {
			status.NetBirdIP = strings.TrimSpace(strings.TrimPrefix(line, "NetBird IP:"))
		} else if strings.HasPrefix(line, "Peers count:") {
			status.PeersCount = strings.TrimSpace(strings.TrimPrefix(line, "Peers count:"))
		}
	}

	// Check if both Management and Signal are Connected
	status.IsConnected = (status.Management == "Connected" && status.Signal == "Connected")

	return status
}

func sendHeartbeat() error {
	netbirdStatus := getNetBirdStatus()
	
	// Determine overall router status
	routerStatus := "online"
	if netbirdStatus == nil {
		routerStatus = "netbird_error"
	} else if !netbirdStatus.IsConnected {
		routerStatus = "netbird_disconnected"
	}

	data := HeartbeatData{
		RouterID:  routerID,
		Status:    routerStatus,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
		PublicIP:  getPublicIP(),
		NetBird:   netbirdStatus,
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		return fmt.Errorf("failed to marshal JSON: %w", err)
	}

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Post(serverURL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return fmt.Errorf("failed to send request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("server returned status: %d", resp.StatusCode)
	}

	statusEmoji := "✓"
	mgmtStatus := "N/A"
	signalStatus := "N/A"
	isConnected := false
	
	if netbirdStatus != nil {
		mgmtStatus = netbirdStatus.Management
		signalStatus = netbirdStatus.Signal
		isConnected = netbirdStatus.IsConnected
		if !isConnected {
			statusEmoji = "⚠"
		}
	} else {
		statusEmoji = "✗"
	}
	
	log.Printf("%s Heartbeat sent | NetBird: %v | Management: %s | Signal: %s", 
		statusEmoji, 
		isConnected,
		mgmtStatus,
		signalStatus)
	
	return nil
}

func main() {
	log.Printf("Starting heartbeat client for router: %s", routerID)
	log.Printf("Server URL: %s", serverURL)
	log.Printf("Interval: %v", interval)

	if err := sendHeartbeat(); err != nil {
		log.Printf("✗ Error sending initial heartbeat: %v", err)
	}

	ticker := time.NewTicker(interval)
	defer ticker.Stop()

	for range ticker.C {
		if err := sendHeartbeat(); err != nil {
			log.Printf("✗ Error sending heartbeat: %v", err)
		}
	}
}