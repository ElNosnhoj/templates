#================================================================
# File: app.py
# Desc: flask app
#================================================================
import flask
from flask_cors import CORS
from datetime import datetime
import logging
from route import *
import argparse    

#================================================================
# parse arguments
#================================================================
parser = argparse.ArgumentParser()
parser.add_argument("--host",       default='0.0.0.0')
parser.add_argument("--port",       default=42123)
parser.add_argument("--cert-file",  default=None)
parser.add_argument("--key-file",   default=None)
args = parser.parse_args()

#================================================================
# setup
#================================================================
# disabling default logger
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

# app setup
app = flask.Flask(__name__)
cors = CORS(app, supports_credentials=True)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 1024
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'ihaveabigone'


#================================================================
# print traffic
#================================================================
@app.before_request
def __before_req(**kwargs):
    path:str = flask.request.path
    params = flask.request.args.to_dict()
    visitor = flask.request.headers.get("X-Real-IP")
    method = flask.request.method
    
    t = datetime.now().strftime("%H:%M:%S")
    print("[%s] %s//%s -- %s - %s" %(t, visitor, method ,path, params))
    
    
#================================================================
# register blueprints or traffic
#================================================================
app.register_blueprint(temp.bp, url_prefix="/temp")
app.register_blueprint(hello.bp, url_prefix="/hello")


#================================================================
# run time!
#================================================================
context = (args.cert_file,  args.key_file) if args.key_file and args.cert_file else None
# context = ("/home/nosnhoj/.cert/cert.pem","/home/nosnhoj/.cert/key.pem")

if __name__ == "__main__": 
    print(f">> Server running at {args.host}:{args.port}")
    app.run(host=args.host, port=args.port, ssl_context=context)
    
    
    
