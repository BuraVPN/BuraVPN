package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
)

const (
	deviceFile = "/etc/buravpn/device.conf"
	configFile = "/etc/buravpn/config.conf"
	tokenFile  = "/etc/buravpn/token"
)

type Credentials struct {
	DeviceID    string
	Password    string
	RegisterURL string
}

func readDeviceConf() (string, string, error) {
	data, err := os.ReadFile(deviceFile)
	if err != nil {
		return "", "", fmt.Errorf("failed to read device file: %w", err)
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
		return "", "", fmt.Errorf("missing DEVICE_ID or PASSWORD in %s", deviceFile)
	}
	return deviceID, password, nil
}

func readRegisterURL() (string, error) {
	data, err := os.ReadFile(configFile)
	if err != nil {
		return "", fmt.Errorf("failed to read config file: %w", err)
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
		if strings.TrimSpace(parts[0]) == "REGISTER_URL" {
			return strings.TrimSpace(parts[1]), nil
		}
	}
	return "", fmt.Errorf("missing REGISTER_URL in %s", configFile)
}

type RegisterRequest struct {
	DeviceID string `json:"deviceId"`
	Password string `json:"password"`
}

type RegisterResponse struct {
	Token string `json:"token"`
}

func register(creds *Credentials) (string, error) {
	payload, err := json.Marshal(RegisterRequest{
		DeviceID: creds.DeviceID,
		Password: creds.Password,
	})
	if err != nil {
		return "", err
	}

	resp, err := http.Post(
		creds.RegisterURL,
		"application/json",
		bytes.NewBuffer(payload),
	)
	if err != nil {
		return "", fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("server returned %d", resp.StatusCode)
	}

	var result RegisterResponse
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return "", fmt.Errorf("failed to parse response: %w", err)
	}

	if result.Token == "" {
		return "", fmt.Errorf("empty token received")
	}

	return result.Token, nil
}

func saveToken(token string) error {
	return os.WriteFile(tokenFile, []byte(token), 0600)
}

func main() {
	deviceID, password, err := readDeviceConf()
	if err != nil {
		log.Fatalf("Failed to read device credentials: %v", err)
	}

	registerURL, err := readRegisterURL()
	if err != nil {
		log.Fatalf("Failed to read register URL: %v", err)
	}

	creds := &Credentials{
		DeviceID:    deviceID,
		Password:    password,
		RegisterURL: registerURL,
	}

	log.Printf("Registering device: %s", creds.DeviceID)

	token, err := register(creds)
	if err != nil {
		log.Fatalf("Registration failed: %v", err)
	}

	if err := saveToken(token); err != nil {
		log.Fatalf("Failed to save token: %v", err)
	}

	log.Printf("Registration successful, token saved to %s", tokenFile)
}