from django.db import models
import uuid

class Cace(models.Model):
    #cace_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #cace_id = models.IntegerField()
    cace = models.CharField(max_length=128)
    company = models.CharField(max_length=128)
    mail = models.CharField(max_length=128)
    telephone =  models.CharField(max_length=128)
    service = models.TextField()
    main_sales_staff = models.TextField()
    sub_sales_staff = models.TextField()
    main_technical_staff = models.TextField()
    sub_technical_staff = models.TextField()
    memo = models.TextField()
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.cace 

    def __unicode__(self):
        return u"{}".format(self.your_field)
    
    #def __repr__(self):
    #    return "{}: {}".format(self.pk, self.name)

    #__str__ = __repr__

class Database(models.Model):
    STATUS_USER = "zabbix"
    STATUS_PASSWD = "zabbix"
    STATUS_DB = "zabbix"
    STATUS_PORT = 3306
    STATUS_CHARSET = "utf8"
    #STATUS_SET = (
    #        (STATUS_DRAFT, "下書き"),
    #        (STATUS_PUBLIC, "公開中"),
    #)
    cace = models.ForeignKey(Cace, related_name='database')
    host = models.CharField(max_length=128)
    user = models.CharField(default=STATUS_USER, max_length=128)
    passwd = models.CharField(default=STATUS_PASSWD, max_length=128)
    db = models.CharField(default=STATUS_DB, max_length=128)
    port = models.IntegerField(default=STATUS_PORT)
    charset = models.CharField(default=STATUS_CHARSET, max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.cace
       
    def __unicode__(self):
        return u"{}".format(self.your_field)
