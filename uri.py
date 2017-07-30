import urllib.request, urllib.parse

data = {
    "host": "10.0.1.163",
    "port": 3306,
    "db": "zabbix",
    "user": "zabbix",
    "passwd": "zabbix",
    "charset": "utf8",
    "query": "select * from alerts"
}
#p = urllib.parse.urlencode(params)
#url = "http://0.0.0.0:8003/?" + p
#print(url)
# => http://www.yoheim.net/?age=29&name=yoheim&comment=%E3%81%82%E3%81%82%E3%81%82%E3%81%82

#with urllib.request.urlopen(url) as res:
#   html = res.read().decode("utf-8")
#   print(html)

data = urllib.parse.urlencode(data) #.encode("utf-8")
with urllib.request.urlopen("http://0.0.0.0:8003/", data=data) as res:
   html = res.read() #.decode("utf-8")
   print(html)

#curl -v -H "Content-Type: application/json" -d '{"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query":"select * from alerts"}' http://0.0.0.0:8003


# または簡単なパラメータの場合には、自分でつけちゃっても良い
#url = "http://www.yoheim.net/blog.php?q=%d" % 20160203
#print(url)
# => http://www.yoheim.net/blog.php?q=20160203
