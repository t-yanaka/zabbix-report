class connection (object):
    def __init__(self, host=None, user=None, password=""):
        self.host = host
        self.user = user
        self.password=password
        print (self.host)
        print (self.user)
        print (self.password)
host="OK5"
user="OK6"
password="OK7"
con = connection(host=host,user=user)
