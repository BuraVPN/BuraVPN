package main

import (
	"log"
	"os/exec"
	"sync"
)

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