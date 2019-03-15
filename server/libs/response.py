import flask

def json (code, data):
  obj = { "code": code }
  if code == 0:
    obj["data"] = data
  else:
    obj["msg"] = data
  return flask.jsonify(obj)
