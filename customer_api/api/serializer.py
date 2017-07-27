# coding: utf-8

from rest_framework import serializers

#from .models import Company, Staff, Database, Cace
from .models import Company, Database, Cace

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'telephone', 'mail')

#class StaffSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = Staff
#        fields = ('id', 'name', 'telephone', 'mail')

class DatabaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = ('id', 'hostname', 'host', 'user', 'passwd', 'db', 'port', 'charset')

class CaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cace
        fields = ('id', 'cace', 'company', 'service', 'technical_main_staff', 'technical_sub_staff', 'sales_main_staff', 'sales_sub_staff', 'monitoring_server', 'memo')
