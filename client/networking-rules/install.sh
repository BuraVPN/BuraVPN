#!/bin/sh

SCRIPT_URL="https://raw.githubusercontent.com/mediteran2910/buraVPN-automatization/main/buravpn_networking.sh"
INSTALL_PATH="/usr/bin/buravpn_networking"

echo "=========================================="
echo "  buraVPN Installer"
echo "=========================================="
echo ""

if ! command -v wget >/dev/null 2>&1; then
    echo "ERROR: wget is not installed!"
    echo "Please install it with: opkg update && opkg install wget"
    exit 1
fi

if [ "$(id -u)" -ne 0 ]; then
    echo "WARNING: This script should be run as root"
    echo "Please run: sudo $0"
    exit 1
fi

echo "Downloading buravpn_networking script..."
wget -q --show-progress "$SCRIPT_URL" -O "$INSTALL_PATH"

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to download script!"
    echo "Please check your internet connection and try again."
    exit 1
fi

echo "Making script executable..."
chmod +x "$INSTALL_PATH"

echo ""
echo "=========================================="
echo "  Installation Complete!"
echo "=========================================="
echo ""
echo "Usage:"
echo "  buravpn_networking travel      # Configure as travel router"
echo "  buravpn_networking exit-node   # Configure as exit node"
echo ""
echo "For more information, visit our official docs:"
echo "  https://github.com/mediteran2910/buraVPN-automatization"
echo ""

exit 0