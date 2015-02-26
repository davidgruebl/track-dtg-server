#!/bin/sh

set -e

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "/root/.nvm/nvm.sh"
nvm use iojs

forever restartall
