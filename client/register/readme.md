# BuraVPN Register

A one-shot Go utility that registers a GL.iNet router with the BuraVPN backend and obtains a JWT for heartbeat authentication.

## What it does

1. Reads device credentials (`DEVICE_ID`, `PASSWORD`) from `/etc/buravpn/device.conf`
2. Reads the backend registration endpoint from `/etc/buravpn/config.conf`
3. Sends a POST request with the credentials to the backend
4. Saves the returned JWT to `/etc/buravpn/token` with `0600` permissions

This is a **provisioning step** — run it once when setting up a new router. After registration, the heartbeat client (`buravpn_heartbeat`) uses the saved token for all subsequent communication and handles token refresh and re-registration automatically.

## Prerequisites

Before running register, two config files must exist on the router:

**`/etc/buravpn/device.conf`** — device credentials, written once during provisioning.

```ini
DEVICE_ID=your-device-id
PASSWORD=your-device-password
```

> ⚠️ This file must survive factory resets. Add it to the sysupgrade preserve list:
>
> ```bash
> echo "/etc/buravpn/device.conf" >> /etc/sysupgrade.conf
> ```

**`/etc/buravpn/config.conf`** — server URLs (only `REGISTER_URL` is used by this tool).

```ini
REGISTER_URL=https://your-backend.com/api/devices/register
```

## Build

GL.iNet routers (tested on GL-SFT1200 Opal) run MIPS little-endian. Cross-compile from your dev machine:

```bash
cd client/register
GOOS=linux GOARCH=mipsle go build -ldflags="-s -w" -o buravpn_register .
```

`-ldflags="-s -w"` strips debug symbols to keep the binary small (~5 MB).

## Deploy & run

```bash
# Copy to router
scp -O buravpn_register root@<router_ip>:/usr/bin/

# SSH in and run
ssh root@<router_ip>
chmod +x /usr/bin/buravpn_register
buravpn_register
```

Expected output:

```
2026/01/11 01:30:00 Registering device: your-device-id
2026/01/11 01:30:01 Registration successful, token saved to /etc/buravpn/token
```

## API contract

**Request** — `POST /api/devices/register`

```json
{
  "deviceId": "your-device-id",
  "password": "your-device-password"
}
```

**Response** — `200 OK`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

The token is a 30-day JWT. After registration, the heartbeat client handles renewal via sliding window refresh (after 20 days) and automatic re-registration on `401`.

## File layout

```
client/register/
└── main.go    — single-file utility: config reading, HTTP request, token save
```

All config parsing uses a simple `KEY=VALUE` line format, skipping comments (`#`) and blank lines.

## How it fits into BuraVPN

```
┌─────────────────────────────────────────────────┐
│  Router provisioning (one-time)                 │
│                                                 │
│  1. Flash OpenWrt + install NetBird             │
│  2. Write device.conf and config.conf           │
│  3. Run buravpn_register  ← this tool           │
│     └─→ JWT saved to /etc/buravpn/token         │
│  4. Start buravpn_heartbeat (uses the token)    │
└─────────────────────────────────────────────────┘
```

## Troubleshooting

**"failed to read device file"** — `/etc/buravpn/device.conf` doesn't exist or isn't readable. Verify the file is in place and has correct permissions.

**"missing DEVICE_ID or PASSWORD"** — the config file exists but is missing one of the required fields. Check for typos or extra whitespace.

**"server returned 401"** — invalid credentials. Verify the `DEVICE_ID` and `PASSWORD` match what's registered in the backend database.

**"server returned 409"** — device is already registered. The existing token in `/etc/buravpn/token` should still be valid. If you need to re-register, delete the device from the backend first.

**"request failed: dial tcp"** — can't reach the backend. Check DNS resolution, internet connectivity, and that `REGISTER_URL` in `config.conf` is correct.

## Requirements

- OpenWrt router (tested on GL.iNet Opal — GL-SFT1200, MIPS little-endian)
- Go 1.21+ on build machine for cross-compilation
- BuraVPN backend running and accessible
