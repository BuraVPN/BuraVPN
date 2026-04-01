package main

import (
	"fmt"
	"os"
	"strings"
)

func readConfig() error {
	data, err := os.ReadFile(configFile)
	if err != nil {
		return fmt.Errorf("failed to read config: %w", err)
	}

	for _, line := range strings.Split(strings.TrimSpace(string(data)), "\n") {
		line = strings.TrimSpace(line)
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		parts := strings.SplitN(line, "=", 2)
		if len(parts) != 2 {
			continue
		}
		key := strings.TrimSpace(parts[0])
		value := strings.TrimSpace(parts[1])

		switch key {
		case "PEER_ID":
			config.PeerID = value
		case "SERVER_URL":
			config.ServerURL = value
		case "REGISTER_URL":
			config.RegisterURL = value
		}
	}

	if config.PeerID == "" || config.ServerURL == "" || config.RegisterURL == "" {
		return fmt.Errorf("missing PEER_ID, SERVER_URL or REGISTER_URL in %s", configFile)
	}

	return nil
}