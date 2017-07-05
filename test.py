import pymysql
import time
con = pymysql.connect(host='10.0.1.163', port=3306, user='root', passwd='', db='zabbix',charset='utf8', use_unicode='true')
 
# make cursor as DictCursor
cur = con.cursor(pymysql.cursors.DictCursor)
 
t0 = time.time()
cur.execute("SELECT  TABLE_NAME, COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, COLUMN_KEY, COLUMN_DEFAULT, EXTRA   FROM information_schema.columns;")
t1 = time.time()
 
# No need to get 'description'
 
for row in cur:
    print row['table_name']
 
cur.close()
con.close()
