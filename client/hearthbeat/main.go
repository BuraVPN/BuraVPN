package main

import (
	"log"
	"time"
)

const (
	configFile       = "/etc/buravpn/config.conf"
	tokenFile        = "/etc/buravpn/token"
	netbirdStateFile = "/tmp/lib/netbird/state.json"
	interval         = 5 * time.Second
)

type Config struct {
	PeerID      string
	ServerURL   string
	RegisterURL string
}

var config Config

func main() {
	if err := readConfig(); err != nil {
		log.Fatalf("Config error: %v", err)
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