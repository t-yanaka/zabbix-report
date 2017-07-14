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
        #db_host = 'host=\'' + host + '\', port=' + port + ', db=\'' + db + '\', user=\'' + user + '\', passwd=\'' + passwd + '\', charset=\'' + charset + '\''
        #conn = pymysql.connect(host=host, user=user, passwd=passwd, db=db, port=port, charset=charset)
        conn = pymysql.connect(host=host, port=port, database=db, user=user, password=passwd, charset=charset)
        cur = conn.cursor()
        cur.execute("show columns from alerts")
        field = cur.fetchall()
        
        cur.execute("select * from alerts;")
        alerts_data=cur.fetchall()
        alerts_dict = {}

        i=0
        for a in alerts_data:
            j=0
            fa_dict = {}
            for f in field:
                fa_dict.update({f[0]:a[j]})
                j+=1
            alerts_dict.update({i:fa_dict})
            i+=1
        cur.close()
        conn.close()         
        resp.body = json.dumps(alerts_dict)
        #resp.status = falcon.HTTP_200
app = falcon.API()
app.add_route("/",HelloResource())

if __name__ == "__main__":
        from wsgiref import simple_server
        httpd = simple_server.make_server("0.0.0.0","8000", app)
        httpd.serve_forever()
