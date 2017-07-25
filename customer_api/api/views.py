# coding: utf-8

import django_filters
from rest_framework import viewsets, filters

from .models import Company, Staff, Database, Cace
from .serializer import CompanySerializer, StaffSerializer, DatabaseSerializer, CaceSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class DatabaseViewSet(viewsets.ModelViewSet):
    queryset = Database.objects.all()
    serializer_class = DatabaseSerializer

class CaceViewSet(viewsets.ModelViewSet):
    queryset = Cace.objects.all()
    serializer_class = CaceSerializer

