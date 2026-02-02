# Router Heartbeat Client

A lightweight Go app that sends heartbeat data from your GL.iNet router to a Next.js backend.

## What it does

- Checks if NetBird is running
- Sends regular heartbeats to your server
- Tracks public IP and NetBird connection state
- Uses only ~5MB RAM

## Getting started

### Building for the router

Gl.Inet router runs MIPS architecture, so you need to cross-compile on your Mac/Linux machine:

````bash
cd ~/Documents/router-heartbeat-build

# Build for MIPS (GL.iNet routers use little-endian)
GOOS=linux GOARCH=mipsle go build -ldflags="-s -w" -o heartbeat main.go

The `-ldflags="-s -w"` strips debug symbols to keep the binary small.

### Deploying to the router

```bash
# Copy to router (using legacy SCP because OpenWrt doesn't have sftp-server)
scp -O heartbeat root@<your_ip>:/usr/bin/

# SSH in and make it executable
ssh root@<your_ip>
chmod +x /usr/bin/heartbeat

# Test it
heartbeat
````

### Running in the background

```bash
# Start with logging
heartbeat > /var/log/heartbeat.log 2>&1 &

# Check it's running
ps w | grep heartbeat

# Stop it
killall heartbeat
```

## Data format

Here's what gets sent to your server:

```json
{
  "routerId": "GL-SFT1200-001",
  "status": "online",
  "timestamp": "2026-01-11T01:33:56Z",
  "publicIp": "93.143.125.49",
  "netbird": {
    "processRunning": true,
    "interfaceUp": true,
    "netbirdIp": "100.77.227.159/16",
    "isHealthy": true
  }
}
```

Status can be:

- `online` - everything's good
- `netbird_disconnected` - NetBird isn't connected
- `netbird_error` - couldn't check NetBird status

## Troubleshooting

**Binary doesn't run on router:**

```bash
# Check router architecture
uname -m

# Should say "mips" - if different, rebuild with the right GOARCH
```

**Running out of memory:**

The app uses about 5MB of actual RAM (RSS). The 524MB you see in `ps` output (VSZ) is just virtual address space - Go reserves it but doesn't actually use it. NetBird does the same thing and runs fine on Opal router.

Check real usage: `cat /proc/$(pgrep heartbeat)/status | grep VmRSS`

## Updating

```bash
# 1. Make changes to main.go
# 2. Rebuild
GOOS=linux GOARCH=mipsle go build -ldflags="-s -w" -o heartbeat main.go

# 3. Stop old version
ssh root@192.168.8.1 "killall heartbeat"

# 4. Upload new version
scp -O heartbeat root@192.168.8.1:/usr/bin/

# 5. Start it back up
ssh root@192.168.8.1 "heartbeat > /var/log/heartbeat.log 2>&1 &"
```

## Logs

```bash
tail -f /var/log/heartbeat.log
```

You'll see something like:

```
2026/01/11 01:33:56 ✓ Heartbeat sent | NetBird Healthy: true | Process: true | Interface: true | IP: 100.77.227.159/16
```

## Requirements

- OpenWrt router (tested on GL.iNet Opal - GL-SFT1200)
