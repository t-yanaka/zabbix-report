# coding: utf-8

import django_filters
from rest_framework import viewsets, filters

from .models import Cace, Database
from .serializer import CaceSerializer, DatabaseSerializer


class CaceViewSet(viewsets.ModelViewSet):
    queryset = Cace.objects.all()
    serializer_class = CaceSerializer


class DatabaseViewSet(viewsets.ModelViewSet):
    queryset = Database.objects.all()
    serializer_class = DatabaseSerializer
