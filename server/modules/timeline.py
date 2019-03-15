import libs.mysqldb as mysql

def list ():
  timelines = mysql.exec("SELECT * FROM timelines order by createdAt desc")
  return 0, timelines
