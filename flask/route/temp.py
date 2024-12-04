#================================================================
# File: template.py
# Desc: 
#================================================================
import flask

bp = flask.Blueprint('template', __name__)

@bp.route('/hello', methods=['GET'])
def __hello():
    print("hello world")
    return "hello world", 200

    
