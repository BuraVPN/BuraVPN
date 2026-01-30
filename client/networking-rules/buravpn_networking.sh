#!/bin/sh

MODE="$1"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

HEARTBEAT_DOMAIN="bura-vpn-git-development-backend-624fef-mediteran2910s-projects.vercel.app"

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

if [ -z "$MODE" ]; then
    log_error "Usage: $0 [exit-node|travel]"
    exit 1
fi

if [ "$MODE" != "exit-node" ] && [ "$MODE" != "travel" ]; then
    log_error "Invalid mode: $MODE"
    log_error "Use 'exit-node' or 'travel'"
    exit 1
fi

log_info "Configuring buraVPN in mode: $MODE"

log_info "Step 1: Configuring VPN zone..."

ZONE_EXISTS=$(uci show firewall.bura_vpn_zone 2>/dev/null)

if [ -z "$ZONE_EXISTS" ]; then
    log_info "Creating buraVPN zone..."
    uci set firewall.bura_vpn_zone=zone
else
    log_warn "buraVPN zone already exists, updating..."
fi

uci set firewall.bura_vpn_zone.name='buraVPN'
uci set firewall.bura_vpn_zone.input='ACCEPT'
uci set firewall.bura_vpn_zone.output='ACCEPT'
uci set firewall.bura_vpn_zone.forward='ACCEPT'
uci set firewall.bura_vpn_zone.masq='1'
uci set firewall.bura_vpn_zone.device='wt0'

log_info "Step 2: Configuring forwarding rules..."

if [ "$MODE" = "travel" ]; then
    log_info "Configuring TRAVEL ROUTER mode (LAN -> VPN)..."
    
    FWD_EXISTS=$(uci show firewall.bura_lan_to_vpn 2>/dev/null)
    
    if [ -z "$FWD_EXISTS" ]; then
        log_info "Creating LAN->VPN forwarding..."
        uci set firewall.bura_lan_to_vpn=forwarding
    fi
    
    uci set firewall.bura_lan_to_vpn.src='lan'
    uci set firewall.bura_lan_to_vpn.dest='buraVPN'
    uci set firewall.bura_lan_to_vpn.enabled='1'
    
    uci set firewall.bura_vpn_to_wan.enabled='0' 2>/dev/null
    
elif [ "$MODE" = "exit-node" ]; then
    log_info "Configuring EXIT NODE mode (VPN -> WAN)..."
    
    FWD_EXISTS=$(uci show firewall.bura_vpn_to_wan 2>/dev/null)
    
    if [ -z "$FWD_EXISTS" ]; then
        log_info "Creating VPN->WAN forwarding..."
        uci set firewall.bura_vpn_to_wan=forwarding
    fi
    
    uci set firewall.bura_vpn_to_wan.src='buraVPN'
    uci set firewall.bura_vpn_to_wan.dest='wan'
    uci set firewall.bura_vpn_to_wan.enabled='1'
    
    uci set firewall.bura_lan_to_vpn.enabled='0' 2>/dev/null
fi

log_info "Committing firewall changes..."
uci commit firewall

log_info "Step 3: Configuring IP rules..."

RULE_EXISTS=$(ip rule show | grep "from 100.77.0.0/16 lookup main")

if [ -z "$RULE_EXISTS" ]; then
    log_info "Adding IP rule: from 100.77.0.0/16 lookup main priority 1050"
    ip rule add from 100.77.0.0/16 lookup main priority 1050
else
    log_warn "IP rule already exists, skipping..."
fi

log_info "Step 4: Configuring routes..."

if ! ip link show wt0 >/dev/null 2>&1; then
    log_warn "Netbird interface (wt0) is not up!"
    log_warn "Routes will be configured, but may not work until Netbird is started."
fi

GATEWAY=$(ip route | grep "default" | grep -v wt0 | awk '{print $3}' | head -1)
INTERFACE=$(ip route | grep "default" | grep -v wt0 | awk '{print $5}' | head -1)

if [ "$MODE" = "exit-node" ]; then
    log_info "EXIT NODE: Removing split default routes (if they exist)..."
    
    ip route del 0.0.0.0/1 dev wt0 2>/dev/null && log_info "Removed 0.0.0.0/1" || log_warn "Route 0.0.0.0/1 not found"
    ip route del 128.0.0.0/1 dev wt0 2>/dev/null && log_info "Removed 128.0.0.0/1" || log_warn "Route 128.0.0.0/1 not found"
    
elif [ "$MODE" = "travel" ]; then
    log_info "TRAVEL ROUTER: Adding split default routes..."
    
    ROUTE1=$(ip route show | grep "0.0.0.0/1 dev wt0")
    ROUTE2=$(ip route show | grep "128.0.0.0/1 dev wt0")
    
    if [ -z "$ROUTE1" ]; then
        ip route add 0.0.0.0/1 dev wt0 && log_info "Added 0.0.0.0/1 dev wt0" || log_error "Failed to add 0.0.0.0/1"
    else
        log_warn "Route 0.0.0.0/1 already exists"
    fi
    
    if [ -z "$ROUTE2" ]; then
        ip route add 128.0.0.0/1 dev wt0 && log_info "Added 128.0.0.0/1 dev wt0" || log_error "Failed to add 128.0.0.0/1"
    else
        log_warn "Route 128.0.0.0/1 already exists"
    fi
    
    log_info "Step 4.1: Adding heartbeat server exception (bypass tunnel)..."
    
    if [ -n "$GATEWAY" ] && [ -n "$INTERFACE" ]; then
        log_info "WAN Gateway: $GATEWAY via $INTERFACE"
        
        RESOLVED_IPS=$(nslookup $HEARTBEAT_DOMAIN 2>/dev/null | grep "Address" | grep -v "#" | awk '{print $NF}')
        
        if [ -z "$RESOLVED_IPS" ]; then
            log_warn "Could not resolve $HEARTBEAT_DOMAIN - trying with 8.8.8.8..."
            RESOLVED_IPS=$(nslookup $HEARTBEAT_DOMAIN 8.8.8.8 2>/dev/null | grep "Address" | grep -v "#" | awk '{print $NF}')
        fi
        
        if [ -n "$RESOLVED_IPS" ]; then
            for IP in $RESOLVED_IPS; do
                case "$IP" in
                    127.*|8.8.8.8|1.1.1.1)
                        continue
                        ;;
                esac
                ip route add $IP via $GATEWAY dev $INTERFACE 2>/dev/null && \
                    log_info "Heartbeat bypass: $IP via $GATEWAY ($INTERFACE)" || \
                    log_warn "Route for $IP already exists or failed"
            done
        else
            log_error "Could not resolve heartbeat domain - heartbeat may not work!"
        fi
    else
        log_error "Could not determine WAN gateway - heartbeat may not work!"
        log_error "Gateway: '$GATEWAY', Interface: '$INTERFACE'"
    fi
fi

log_info "Step 5: Restarting firewall..."
/etc/init.d/firewall restart

echo ""
log_info "============================================"
log_info "buraVPN Configuration Complete!"
log_info "============================================"
log_info "Mode: $MODE"
log_info "Zone: buraVPN (wt0)"

if [ "$MODE" = "travel" ]; then
    log_info "Forwarding: LAN -> buraVPN"
    log_info "Routes: Split default (0.0.0.0/1, 128.0.0.0/1)"
    log_info "Heartbeat: Bypasses tunnel via WAN"
else
    log_info "Forwarding: buraVPN -> WAN"
    log_info "Routes: Normal default (split routes removed)"
    log_info "Heartbeat: Direct via WAN (no bypass needed)"
fi

log_info "IP Rule: 100.77.0.0/16 -> main table"
log_info "============================================"

echo ""
log_info "To verify configuration:"
log_info "  - Firewall: uci show firewall | grep bura"
log_info "  - IP Rules: ip rule show"
log_info "  - Routes:   ip route show"
log_info "  - Heartbeat bypass: ip route show | grep -E '64\\.|76\\.|216\\.'"
log_info ""

if command -v netbird >/dev/null 2>&1; then
    log_info "Netbird status:"
    netbird status 2>/dev/null || log_warn "Netbird is not running"
fi

exit 0