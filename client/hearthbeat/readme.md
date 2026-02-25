# BuraVPN Heartbeat Client

A lightweight Go service that runs on your GL.iNet router, sends heartbeat data to the BuraVPN backend, and automatically applies tunnel configurations.

## What it does

- Authenticates with the backend using a device JWT
- Sends regular heartbeats every 5 seconds via WAN interface (bypasses VPN tunnel)
- Reports NetBird IP, tunnel status, packet loss, and latency
- Receives and applies tunnel configs (exit-node / travel-router mode)
- Automatically re-registers if the JWT expires
- Refreshes the JWT via sliding window (token renewed after 20 days of use)

## Project structure

```
client/heartbeat/
├── main.go       — entry point, Config struct, constants
├── config.go     — readConfig()
├── heartbeat.go  — send(), Heartbeat/HeartbeatResponse structs
├── tunnel.go     — TunnelConfig, applyTunnelConfig(), tunnelsMatch()
├── network.go    — makeDirectClient(), WAN bind logic
├── netbird.go    — getNetbirdIP(), pingViaTunnel()
└── auth.go       — readToken(), saveToken(), reRegister()
```

## Configuration

The app reads from three files on the router, all located in `/etc/buravpn/`:

**`/etc/buravpn/device.conf`** — device credentials, written once during provisioning.

> ⚠️ This file must survive a factory reset. On OpenWrt, files in `/etc` are part of the overlay filesystem and are wiped on reset. To persist `device.conf`, add it to `/etc/sysupgrade.conf`:
>
> ```bash
> echo "/etc/buravpn/device.conf" >> /etc/sysupgrade.conf
> ```

```ini
DEVICE_ID=<your-device-id>
PASSWORD=<your-device-password>
```

**`/etc/buravpn/config.conf`** — server URLs and peer identity, written during device setup.

```ini
PEER_ID=<your-peer-uuid>
SERVER_URL=https://your-backend.com/api/heartbeat
REGISTER_URL=https://your-backend.com/api/devices/register
```

**`/etc/buravpn/token`** — JWT written automatically after registration, do not edit manually.

## Getting started

### 1. Register the device

Before running the heartbeat, the device must be registered to obtain a JWT:

```bash
cd client/register
GOOS=linux GOARCH=mipsle go build -ldflags="-s -w" -o buravpn_register .
scp -O buravpn_register root@<router_ip>:/usr/bin/
ssh root@<router_ip> "buravpn_register"
```

This reads credentials from `device.conf`, authenticates with the backend, and saves the token to `/etc/buravpn/token`.

### 2. Build the heartbeat binary

GL.iNet routers run MIPS little-endian architecture, so cross-compile on your Mac/Linux:

```bash
cd client/heartbeat

# Only needed once when setting up the project for the first time
go mod init buravpn_heartbeat
go mod tidy

# Cross-compile for MIPS
GOOS=linux GOARCH=mipsle go build -ldflags="-s -w" -o buravpn_heartbeat .
```

The `-ldflags="-s -w"` strips debug symbols to keep the binary small.

### 3. Deploy to the router

```bash
# Copy binary
scp -O buravpn_heartbeat root@<router_ip>:/usr/bin/

# SSH in and make executable
ssh root@<router_ip>
chmod +x /usr/bin/buravpn_heartbeat
```

### 4. Run

```bash
# Test run
buravpn_heartbeat

# Run in background with logging
buravpn_heartbeat > /var/log/buravpn_heartbeat.log 2>&1 &
```

## Authentication flow

1. On first run, `buravpn_register` authenticates and saves a 30-day JWT to `/etc/buravpn/token`
2. Every heartbeat request sends the JWT in the `Authorization: Bearer` header
3. If the backend returns a new token (sliding window refresh after 20 days), it is saved automatically
4. If the backend returns `401`, the heartbeat client re-registers automatically using credentials from `device.conf` — no manual intervention needed

## Data sent to backend

```json
{
  "routerId": "peer-uuid",
  "timestamp": "2026-01-11T01:33:56Z",
  "netbirdIp": "100.77.227.159",
  "tunnelUp": true,
  "packetLoss": 0,
  "latencyMs": 4.2,
  "tunnelStatus": [
    {
      "tunnelId": "tunnel-uuid",
      "peerIp": "100.77.0.1",
      "up": true,
      "packetLoss": 0,
      "latencyMs": 4.2
    }
  ]
}
```

## Data received from backend

```json
{
  "ok": true,
  "peerFound": true,
  "tunnels": [
    {
      "tunnelId": "tunnel-uuid",
      "role": "travel-router",
      "tunnelPeerIps": ["100.77.0.1"]
    }
  ],
  "token": "ey..."
}
```

`token` is only present when the backend issues a refreshed JWT.

## Tunnel roles

| Role            | Description                                     |
| --------------- | ----------------------------------------------- |
| `exit-node`     | This router acts as the VPN exit point          |
| `travel-router` | This router routes traffic through an exit node |

When the role changes, `buravpn_networking` is called automatically with the appropriate mode.

## Updating

```bash
# 1. Rebuild
cd client/heartbeat
GOOS=linux GOARCH=mipsle go build -ldflags="-s -w" -o buravpn_heartbeat .

# 2. Stop, deploy, restart
ssh root@<router_ip> "killall buravpn_heartbeat"
scp -O buravpn_heartbeat root@<router_ip>:/usr/bin/
ssh root@<router_ip> "buravpn_heartbeat > /var/log/buravpn_heartbeat.log 2>&1 &"
```

## Logs

```bash
tail -f /var/log/buravpn_heartbeat.log
```

Example output:

```
2026/01/11 01:33:56 Heartbeat binding to WAN: 192.168.1.5
2026/01/11 01:33:56 ✓ | ip=100.77.227.159 tunnels=1 up=true loss=0% latency=4ms
2026/01/11 01:53:56 ✓ Token refreshed
2026/01/11 02:10:01 ⚠ Token expired, re-registering...
2026/01/11 02:10:02 ✓ Re-registration successful
```

## Troubleshooting

**Binary doesn't run on router:**

```bash
uname -m  # should output "mips"
```

If different, rebuild with the correct `GOARCH`.

**High memory in `ps` output:**

The VSZ value (e.g. 524MB) is virtual address space — Go reserves it but doesn't use it. Check real RAM usage:

```bash
cat /proc/$(pgrep buravpn_heartbeat)/status | grep VmRSS
```

**Heartbeat not reaching server:**

The client binds to the WAN interface to bypass the NetBird VPN tunnel. If `ip route show default` doesn't show a non-VPN route, the client falls back to the default Go HTTP client.

## Requirements

- OpenWrt router (tested on GL.iNet Opal — GL-SFT1200)
- NetBird installed and configured
- BuraVPN backend running and accessible
