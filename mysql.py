# -*- coding: utf-8 -*-
import json
import pymysql

conn = pymysql.connect(host='10.0.1.163', port=3306, db='zabbix', user='zabbix', passwd='zabbix', charset="utf8")

cur = conn.cursor()
cur.execute("select * from trends;")

print (cur.fetchall())
    

cur.close()
conn.close()

