#!/usr/bin/env bash

# SSL cert file paths
ssl_cert=~/.cert/cert.pem
ssl_key=~/.cert/key.pem

# server config if applicable
host=0.0.0.0
port=8000

case $1 in
    dev) npx webpack-dev-server --config ./webpack.config.js --mode development --port $port --server-type https --server-options-key $ssl_key --server-options-cert $ssl_cert --hot ;;
    serve) BROWSER=none serve -s dist --listen $port --ssl-cert $ssl_cert --ssl-key $ssl_key ;;
    build) npx webpack --mode production ;;
    *) echo Invalid Option \"$1\" && exit 1 ;;
esac