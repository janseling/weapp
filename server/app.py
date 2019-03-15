import libs.response as resp
import libs.mysqldb as mysql

import modules.blog as blog
import modules.timeline as timeline

import flask

app = flask.Flask(__name__)

@app.before_request
def db_connect():
  mysql.conn()

@app.after_request
def db_disconnect(resp):
  mysql.close()
  return resp

@app.route("/blog/list", methods=["GET"])
def blog_list():
  code, data = blog.list()
  return resp.json(code, data)

@app.route("/blog/detail/<blog_id>", methods=["GET"])
def blog_detail (blog_id):
  code, data = blog.detail(blog_id)
  return resp.json(code, data)

@app.route("/timeline/list", methods=["GET"])
def timeline_list ():
  code, data = timeline.list()
  return resp.json(code, data)

app.run(host='0.0.0.0', port=10002)
