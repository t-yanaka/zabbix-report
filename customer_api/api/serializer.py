# coding: utf-8

from rest_framework import serializers

from .models import Cace, Database


class CaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cace
        fields = ('id', 'cace', 'company', 'mail', 'telephone', 'service', 'main_sales_staff', 'sub_sales_staff','main_technical_staff', 'sub_technical_staff', 'memo')


class DatabaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = ('id', 'cace', 'host', 'user', 'passwd', 'db', 'port', 'charset')
