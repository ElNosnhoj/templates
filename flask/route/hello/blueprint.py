#================================================================
# File: blueprint.py
# Desc: handle routes
#================================================================
import flask
from .manager import *

bp = flask.Blueprint('hello',__name__)

@bp.get("/hello")
def __hello():
    print("blueprint says hello")
    try:
        res = Manager.hello()
        return res, 200
    except:
        return "500 Internal Server Error", 500
    
    
