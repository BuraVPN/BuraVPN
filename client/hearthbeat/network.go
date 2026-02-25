package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"os/exec"
	"strings"
	"time"
)

func makeDirectClient() *http.Client {
	srcIP, err := getWANBindAddr()
	if err != nil {
		log.Printf("WAN bind: %v, using default client", err)
		return http.DefaultClient
	}

	log.Printf("Heartbeat binding to WAN: %s", srcIP)

	localAddr := net.ParseIP(srcIP)
	dialer := &net.Dialer{
		LocalAddr: &net.TCPAddr{IP: localAddr},
		Timeout:   5 * time.Second,
	}
	return &http.Client{
		Timeout: 10 * time.Second,
		Transport: &http.Transport{
			DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {
				return dialer.DialContext(ctx, network, addr)
			},
		},
	}
}

func getWANBindAddr() (string, error) {
	out, err := exec.Command("ip", "route", "show", "default").Output()
	if err != nil {
		return "", fmt.Errorf("ip route: %w", err)
	}

	for _, line := range strings.Split(strings.TrimSpace(string(out)), "\n") {
		if strings.Contains(line, "wt0") {
			continue
		}
		fields := strings.Fields(line)
		for i, f := range fields {
			if f == "src" && i+1 < len(fields) {
				return fields[i+1], nil
			}
		}
		for i, f := range fields {
			if f == "dev" && i+1 < len(fields) {
				return getIfaceIP(fields[i+1])
			}
		}
	}
	return "", fmt.Errorf("no non-VPN default route found")
}

func getIfaceIP(name string) (string, error) {
	iface, err := net.InterfaceByName(name)
	if err != nil {
		return "", err
	}
	addrs, err := iface.Addrs()
	if err != nil {
		return "", err
	}
	for _, a := range addrs {
		if ipnet, ok := a.(*net.IPNet); ok && ipnet.IP.To4() != nil {
			return ipnet.IP.String(), nil
		}
	}
	return "", fmt.Errorf("no IPv4 on %s", name)
}