import json
import falcon
import pymysql

class HelloResource(object):
    def on_get(self,req,resp):
        
        #msg={"message":"hello,falcon"}
        #resp.body = json.dumps(msg)
        #MySQLServer = json.load(req)
         
        conn = pymysql.connect(host='10.0.1.163', port=3306, db='zabbix', user='zabbix', passwd='zabbix', charset="utf8")
        cur = conn.cursor()
        cur.execute("select * from trends;")

        #print (cur.fetchall()) 
        resp.body = json.dumps(cur.fetchall()) 

app = falcon.API()
app.add_route("/",HelloResource())

if __name__ == "__main__":
    from wsgiref import simple_server
    httpd = simple_server.make_server("0.0.0.0","8000",app)
    httpd.serve_forever()
