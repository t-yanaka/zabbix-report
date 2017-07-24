import json
import falcon
import pymysql

class HelloResource(object):
    def on_get(self,req,resp):
        resp.body = json.dumps("This is no GET API")
        
    def on_post(self,req,resp):

        db_host_data = json.loads(req.stream.read().decode('utf-8'))
 
        host = db_host_data['host']
        port = db_host_data['port']
        db = db_host_data['db']
        user = db_host_data['user']
        passwd = db_host_data['passwd']
        charset = db_host_data['charset']
        query = db_host_data['query']

        conn = pymysql.connect(host=host, port=port, database=db, user=user, password=passwd, charset=charset, cursorclass=pymysql.cursors.DictCursor)
        cur = conn.cursor() 
        cur.execute(query)
        alerts_data = cur.fetchall()

        cur.close()
        conn.close()         
        resp.body = json.dumps(alerts_data)
        #resp.status = falcon.HTTP_200
app = falcon.API()
app.add_route("/",HelloResource())

if __name__ == "__main__":
        from wsgiref import simple_server
        httpd = simple_server.make_server("0.0.0.0","8000", app)
        httpd.serve_forever()
