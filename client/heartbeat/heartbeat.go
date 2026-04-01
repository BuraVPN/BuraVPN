package main

import (
	"bytes"
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type Heartbeat struct {
	RouterID     string       `json:"routerId"`
	Timestamp    string       `json:"timestamp"`
	NetbirdIP    string       `json:"netbirdIp,omitempty"`
	TunnelUp     bool         `json:"tunnelUp"`
	PacketLoss   float64      `json:"packetLoss"`
	LatencyMs    float64      `json:"latencyMs,omitempty"`
	TunnelStatus []TunnelPing `json:"tunnelStatus,omitempty"`
}

type HeartbeatResponse struct {
	OK        bool           `json:"ok"`
	PeerFound bool           `json:"peerFound"`
	Tunnels   []TunnelConfig `json:"tunnels"`
	Token     string         `json:"token,omitempty"`
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

	token, err := readToken()
	if err != nil {
		log.Printf("⚠ Could not read token: %v", err)
		return
	}

	data, _ := json.Marshal(hb)
	req, err := http.NewRequest("POST", config.ServerURL, bytes.NewBuffer(data))
	if err != nil {
		log.Printf("⚠ Failed to create request: %v", err)
		return
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)

	start := time.Now()
	resp, err := client.Do(req)
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

	if resp.StatusCode == http.StatusUnauthorized {
		log.Printf("⚠ Token expired, re-registering...")
		if err := reRegister(); err != nil {
			log.Printf("✗ Re-registration failed: %v", err)
		} else {
			log.Printf("✓ Re-registration successful")
		}
		return
	}

	var hbResp HeartbeatResponse
	if err := json.NewDecoder(resp.Body).Decode(&hbResp); err != nil {
		log.Printf("⚠ Failed to parse response: %v", err)
		return
	}

	if hbResp.Token != "" {
		if err := saveToken(hbResp.Token); err != nil {
			log.Printf("⚠ Failed to save refreshed token: %v", err)
		} else {
			log.Printf("✓ Token refreshed")
		}
	}

	applyTunnelConfig(hbResp.Tunnels)

	status := "✓"
	if len(tunnels) > 0 && !anyTunnelUp {
		status = "⚠ tunnel down"
	}
	log.Printf("%s | ip=%s tunnels=%d up=%v loss=%.0f%% latency=%.0fms",
		status, hb.NetbirdIP, len(tunnels), anyTunnelUp, hb.PacketLoss, latency)
}