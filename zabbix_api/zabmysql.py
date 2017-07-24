import json
import pymysql

class selest:

    def query(**db_host_data):
        #db_host_data = json.loads(req.stream.read().decode('utf-8'))
        #db_host_data = json.loads(db_informations.stream)

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
        return json.dumps(alerts_data)
        #return json.dumps(db_host_data)

