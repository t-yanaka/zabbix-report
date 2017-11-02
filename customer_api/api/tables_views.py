# coding: utf-8

import django_filters
from rest_framework import viewsets, filters
from django.shortcuts import render
from .tables_models import Column, No_Relation_Table, Relation_Table, No_Relation_Columns, Relation_Columns, No_Relation_Options, Relation_Options, Columns, Tables

def tables_index(request):
    #buttons = [table['name'] for table in Tables.objects.values('name')]
    id = []
    buttons = []
    for table in Tables.objects.values():
        buttons += [{'id': table['id'], 'name': table['name']}]
        
    return render(request, 'api/tables.html', {'buttons': buttons})
 
def columns_index(request):
     if request.method == 'POST':
         id = request.POST['table']
         buttons = Columns.objects.filter(tables=id)
 
     return render(request, 'api/columns.html', {'buttons': buttons})


def tables_add(request):
    return render(request, 'api/tables_add.html')


#def columns_add(request):
#     if request.method == 'POST':
#         id = request.POST['table']
#         buttons = Columns.objects.filter(tables=id)
#
#     return render(request, 'api/columns.html', {'buttons': buttons})

    
#   return render(request, 'api/edit.html', {'form': form,})

#def delete(request, id=None):
    

#def detail(request, id=None):
#    return HttpResponse("詳細")
