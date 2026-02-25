package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strings"
)

const deviceFile = "/etc/buravpn/device.conf"

func readToken() (string, error) {
	data, err := os.ReadFile(tokenFile)
	if err != nil {
		return "", fmt.Errorf("failed to read token: %w", err)
	}
	return strings.TrimSpace(string(data)), nil
}

func saveToken(token string) error {
	return os.WriteFile(tokenFile, []byte(token), 0600)
}

func reRegister() error {
	data, err := os.ReadFile(deviceFile) 
	if err != nil {
		return fmt.Errorf("failed to read device file: %w", err)
	}

	var deviceID, password string
	for _, line := range strings.Split(strings.TrimSpace(string(data)), "\n") {
		line = strings.TrimSpace(line)
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		parts := strings.SplitN(line, "=", 2)
		if len(parts) != 2 {
			continue
		}
		switch strings.TrimSpace(parts[0]) {
		case "DEVICE_ID":
			deviceID = strings.TrimSpace(parts[1])
		case "PASSWORD":
			password = strings.TrimSpace(parts[1])
		}
	}

	if deviceID == "" || password == "" {
		return fmt.Errorf("missing DEVICE_ID or PASSWORD in %s", deviceFile)
	}

	registerURL := config.RegisterURL

	payload, _ := json.Marshal(map[string]string{
		"deviceId": deviceID,
		"password": password,
	})

	resp, err := http.Post(registerURL, "application/json", bytes.NewBuffer(payload))
	if err != nil {
		return fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("server returned %d", resp.StatusCode)
	}

	var result struct {
		Token string `json:"token"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return err
	}
	if result.Token == "" {
		return fmt.Errorf("empty token received")
	}

	return saveToken(result.Token)
}