import libs.mysqldb as mysql

def list ():
  blogs = mysql.exec("SELECT id,title,pic,createdAt,updatedAt,category,series FROM blogs where status = 1 order by createdAt desc")
  return 0, blogs

def detail (blog_id):
  blog = mysql.exec("SELECT * FROM blogs where id = " + blog_id, (), True)
  return 0, blog
