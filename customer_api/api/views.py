# coding: utf-8

import django_filters
from rest_framework import viewsets, filters
from django.shortcuts import render
#from .models import Company, Staff, Database, Cace
from .customer_models import Company, Database, Cace
#from .serializer import CompanySerializer, StaffSerializer, DatabaseSerializer, CaceSerializer
from .serializer import CompanySerializer, DatabaseSerializer, CaceSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

#class StaffViewSet(viewsets.ModelViewSet):
#    queryset = Staff.objects.all()
#    serializer_class = StaffSerializer

class DatabaseViewSet(viewsets.ModelViewSet):
    queryset = Database.objects.all()
    serializer_class = DatabaseSerializer

class CaceViewSet(viewsets.ModelViewSet):
    queryset = Cace.objects.all()
    serializer_class = CaceSerializer

def skill(request):
    form = SkillSelectionForm()
    return render(request, 'api/index.html', {'form': form,})

#class SkillViewSet(viewsets.ModelViewSet):
#    queryset = Skill.objects.all()

#class SkillCategoryViewSet(viewsets.ModelViewSet):
#    queryset = SkillCategory.objects.all()

