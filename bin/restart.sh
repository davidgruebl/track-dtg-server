#!/bin/sh

set -e

export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "/root/.nvm/nvm.sh"
nvm use iojs

forever list | grep "bin/www.js" | awk '{print $2}' | xargs node -e "console.log(process.argv[1].replace(/[\[\]]/g,''))" | xargs forever restart
