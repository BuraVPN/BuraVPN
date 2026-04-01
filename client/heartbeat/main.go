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
var currentWanIP string

func main() {
    if err := readConfig(); err != nil {
        log.Fatalf("Config error: %v", err)
    }

    log.Printf("Starting heartbeat: peerId=%s", config.PeerID)

    client := makeDirectClient()
    currentWanIP, _ = getWANBindAddr()

    checkTicker := time.NewTicker(60 * time.Second)
    defer checkTicker.Stop()

    for {
        select {
        case <-checkTicker.C:
            newIP, err := getWANBindAddr()
            if err == nil && newIP != currentWanIP {
                log.Printf("WAN IP changed: %s → %s, recreating client", currentWanIP, newIP)
                client = makeDirectClient()
                currentWanIP = newIP
            }
        default:
        }

        send(client)
        time.Sleep(interval)
    }
}