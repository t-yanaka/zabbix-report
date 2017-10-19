#import sys,os
#sys.path.append(os.pardir)
#import admin
from django.contrib import admin

#from .models import Cace, Database, Company, Staff
from .customer_models import Cace, Database, Company
from .tables_models import Column, No_Relation_Table, Relation_Table, No_Relation_Columns, Relation_Columns, No_Relation_Options, Relation_Options, Columns, Tables

@admin.register(Cace)
class Entry_cace(admin.ModelAdmin):
    pass

@admin.register(Database)
class Entry_database(admin.ModelAdmin):
    pass

@admin.register(Company)
class Entry_company(admin.ModelAdmin):
    pass

#@admin.register(Templetes)
#class Entry_company(admin.ModelAdmin):
#    pass

#@admin.register(Staff)
#class Entry_staff(admin.ModelAdmin):
#    pass

@admin.register(Column)
class Entry_no_relation_table(admin.ModelAdmin):
    pass

@admin.register(No_Relation_Table)
class Entry_no_relation_table(admin.ModelAdmin):
    pass

@admin.register(Relation_Table)
class Entry_relation_table(admin.ModelAdmin):
    pass

@admin.register(No_Relation_Columns)
class Entry_no_relation_columns(admin.ModelAdmin):
    pass

@admin.register(Relation_Columns)
class Entry_relation_columns(admin.ModelAdmin):
    pass

@admin.register(No_Relation_Options)
class Entry_no_relation_options(admin.ModelAdmin):
    pass

@admin.register(Relation_Options)
class Entry_relation_options(admin.ModelAdmin):
    pass

@admin.register(Columns)
class Entry_Columns(admin.ModelAdmin):
    pass

@admin.register(Tables)
class Entry_Tables(admin.ModelAdmin):
    pass
