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
         id = request.POST["table"]
         buttons = [column['name'] for column in Columns.objects.values('name')]
 
     return render(request, 'api/columns.html', {'buttons': buttons})

def tables_edit(request, id=None):
    if request.method == "POST":
        clumns  = [column['name'] for column in columns.objects.values('name')]
    else:
        columns = AnyForm(instance=any)
    
    return render_to_response('api/columns.html',
                               dict(any_form=any_form, any_id=any_id),
                               RequestContext(request)
                             )  
#   return render(request, 'api/edit.html', {'form': form,})

#def delete(request, id=None):
    

#def detail(request, id=None):
#    return HttpResponse("詳細")
