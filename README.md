### Overview
`netbird_connection_watcher` is an application that monitors connection status of a netbird client daemon service running on a `mips`- based embedded Linux devices and logs the output to device's serial console.

## Prerequisites
- OpenWRT device with a network connection with the host machine
- `build-essential` and `make` - standard development tools
- `mipsel-linux-musl-gcc` - cross-compiler toolchain
    - if not available from the package repository, obtain the source directly, build it locally and add it to PATH:
    ```
    cd
    wget https://musl.cc/mipsel-linux-musl-cross.tgz
    tar xf mipsel-linux-musl-cross.tgz
    export PATH=$PWD/mipsel-linux-musl-cross/bin:$PATH
    ```
- `ssh` installed both on host machine and target device

## Build and run
*For simplicty's sake, the binary you obtain from cross-compiling will be directly copied to the device in `tmp` folder instead of creating an .ipk package that would be integrated into the image.*

From the root of the project directory, simply run `make` which will create the binary inside the build directory. Now copy the binary to the device with:
```
scp -O build/netbird_connection_watcher  root@<target-device-ip>:/tmp/
```
Finally, run the following to observe the output:

```
cd /var/
./netbird_connection_watcher
```
