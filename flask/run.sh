#!/usr/bin/env bash

# setup PYTHONPATH
pypath=""
[[ ":$PYTHONPATH:" != *":$pypath:"* ]] && export PYTHONPATH="$pypath:$PYTHONPATH"

# SSL cert file paths
ssl_cert=~/.cert/cert.pem
ssl_key=~/.cert/key.pem

# server config if applicable
host=0.0.0.0
port=8030

case $1 in 
    gunicorn) gunicorn -w 4 --timeout 30 -b $host:$port --certfile=$ssl_cert --keyfile=$ssl_key server:app ;;
    flask) FLASK_APP='app.py' FLASK_RUN_PORT="$port" flask run --host=$host --cert=$ssl_cert --key=$ssl_key ;;
    nodemon) nodemon app.py --host=$host --port=$port --cert-file=$ssl_cert --key-file=$ssl_key ;;
    python) python -u app.py --host=$host --port=$port --cert-file=$ssl_cert --key-file=$ssl_key ;;
    *) echo Invalid Option \"$1\" && exit 1 ;;
esac
