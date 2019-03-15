from flask import g
import mysql.connector
import libs.config as config

cfg = config.get('mysql')

def conn ():
  g.conn = mysql.connector.connect(
      host = cfg['Host'],
      user = cfg['User'],
      passwd = cfg['Password'],
      database = cfg['Database']
  )
  g.cursor = g.conn.cursor()

def close ():
  g.cursor.close()
  g.cursor = None

  g.conn.close()
  g.conn = None

def exec (sql, args = (), one = False):
  g.cursor.execute(sql, args)
  rv = [dict((g.cursor.description[idx][0], value)
  for idx, value in enumerate(row)) for row in g.cursor.fetchall()]
  return (rv[0] if rv else None) if one else rv

#def select (table, where = None, order_by = None, limit = 10, fields = None):
  #sql = "SELECT %s FROM %s WHERE %s order by %s limit %s".format(
      #"*" if fields == None else ",".join(fields),
      #table, where,
      #"id asc" if order_by == None else "%s %s".format(order_by.keys()[0], order_by[order_by.keys()[0]]),
      #limit
  #)
  #return exec(sql)

