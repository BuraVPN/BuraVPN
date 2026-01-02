# buraVPN-automatization

Easily configure your router as either an **Exit Node** or **Travel Router** with proper firewall zones, forwarding rules, and routing tables.

## Requirements

- OpenWrt or GL.iNet router
- Netbird installed and configured
- Root access via SSH

## Installation

### Quick Install (One-liner)

```bash
wget -O - https://raw.githubusercontent.com/mediteran2910/buraVPN-automatization/main/install.sh | sh
```

### Manual Install

```bash
# Download the script
wget https://raw.githubusercontent.com/mediteran2910/buraVPN-automatization/main/buravpn_networking.sh -O /usr/bin/buravpn_networking

# Make it executable
chmod +x /usr/bin/buravpn_networking
```

## Usage

### Configure as Travel Router

```bash
buravpn_networking travel
```

This will:

- Route all LAN traffic through the Netbird VPN
- Configure split default routes (0.0.0.0/1, 128.0.0.0/1)
- Set up LAN → VPN forwarding

### Configure as Exit Node

```bash
buravpn_networking exit-node
```

This will:

- Accept traffic from other Netbird peers
- Route VPN traffic to WAN (internet)
- Remove split default routes
- Set up VPN → WAN forwarding

### Switch Between Modes

Simply run the command with the new mode:

```bash
# Currently travel, switch to exit-node
buravpn_networking exit-node

# Switch back to travel
buravpn_networking travel
```

## Verification

After running the script, verify the configuration:

```bash
# Check firewall zones
uci show firewall | grep bura

# Check IP rules
ip rule show

# Check routes
ip route show

# Check Netbird status
netbird status
```

## What It Does

### Common (Both Modes)

1. Creates `buraVPN` firewall zone for wt0 interface
2. Adds IP rule: `from 100.77.0.0/16 lookup main priority 1050`
3. Configures masquerading (NAT) for VPN zone

### Travel Router Mode

- **Forwarding**: LAN → buraVPN
- **Routes**: Adds split default routes through VPN
- **Use Case**: Mobile router that routes all client traffic through exit node

### Exit Node Mode

- **Forwarding**: buraVPN → WAN
- **Routes**: Removes split default routes
- **Use Case**: Home router that provides internet access to travel routers

## Troubleshooting

### No Internet on Travel Router

```bash
# Check if split routes exist
ip route show | grep wt0

# Should show:
# 0.0.0.0/1 dev wt0
# 128.0.0.0/1 dev wt0
```

### Exit Node Not Working

```bash
# Check if IP rule exists
ip rule show | grep 100.77

# Should show:
# 1050:   from 100.77.0.0/16 lookup main
```

### Netbird Not Connected

```bash
netbird status

# If not connected, connect first:
netbird up
```

## Uninstall

```bash
# Remove the script
rm /usr/bin/buravpn_networking

# Clean up firewall config (optional)
uci delete firewall.bura_vpn_zone
uci delete firewall.bura_lan_to_vpn
uci delete firewall.bura_vpn_to_wan
uci commit firewall
/etc/init.d/firewall restart

# Remove IP rule
ip rule del from 100.77.0.0/16 lookup main priority 1050

# Remove routes (if travel mode)
ip route del 0.0.0.0/1 dev wt0
ip route del 128.0.0.0/1 dev wt0
```

## ⚠️ Disclaimer

This script modifies firewall rules and routing tables. Always test in a safe environment first. The authors are not responsible for any network disruptions or security issues.

---
