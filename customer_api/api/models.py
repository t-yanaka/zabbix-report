from django.db import models
from django.contrib.auth.models import User

import uuid

class Company(models.Model):
    name = models.CharField(max_length=128)
    telephone =  models.CharField(max_length=128)
    mail = models.CharField(max_length=128)

    def __str__(self):
        return self.name 

#class Staff(models.Model):
#    name = models.CharField(max_length=128)
#    telephone =  models.CharField(max_length=128)
#    mail = models.CharField(max_length=128)

    #main_sales_staff = models.TextField()
    #sub_sales_staff = models.TextField()
    #main_technical_staff = models.TextField()
    #sub_technical_staff = models.TextField()
    #telephone =  models.CharField(max_length=128)
    #mail = models.CharField(max_length=128)

    def __str__(self):
        return self.name

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
    hostname = models.CharField(max_length=128)
    #cace = models.ForeignKey(Cace, related_name='database')
    hostname = models.CharField(max_length=128)
    host = models.CharField(max_length=128)
    user = models.CharField(default=STATUS_USER, max_length=128)
    passwd = models.CharField(default=STATUS_PASSWD, max_length=128)
    db = models.CharField(default=STATUS_DB, max_length=128)
    port = models.IntegerField(default=STATUS_PORT)
    charset = models.CharField(default=STATUS_CHARSET, max_length=128)
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.hostname

#class Templetes(models.Model):
    #cace_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #cace_id = models.IntegerField()
#    filename = models.CharField(max_length=128)
#    upload = models.FileField(upload_to='uploads/')
#    memo = models.TextField(blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)

#    def __str__(self):
#        return self.cace


class Cace(models.Model):
    #cace_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #cace_id = models.IntegerField()
    cace = models.CharField(max_length=128)
    company = models.ForeignKey(Company)
    service = models.TextField(blank=True)
    technical_main_staff = models.ForeignKey(User, related_name='technical_main_staff')
    technical_sub_staff = models.ForeignKey(User, related_name='technical_sub_staff') 
    sales_main_staff = models.ForeignKey(User, related_name='sales_main_staff')
    sales_sub_staff = models.ForeignKey(User, related_name='sales_sub_staff')
    monitoring_server = models.ForeignKey(Database)
    #Templetes = models.ForeignKey(Templetes)
    memo = models.TextField(blank=True)
    #created_at = models.DateTimeField(auto_now_add=True)
    #updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.cace

    #sub_sales_staff = models.TextField()
    #main_technical_staff = models.TextField()
    #sub_technical_staff = models.TextField()
    #telephone =  models.CharField(max_length=128)
    #mail = models.CharField(max_length=128)


    #def __unicode__(self):
    #    return '{}'.format(self.your_field)
    
    #def __repr__(self):
    #    return "{}: {}".format(self.pk, self.name)

    #__str__ = __repr__


       
    #def __unicode__(self):
    #    return '{}'.format(self.your_field)
