from django.contrib import admin

#from .models import Cace, Database, Company, Staff
from .models import Cace, Database, Company


@admin.register(Cace)
class Entry_cace(admin.ModelAdmin):
    pass

@admin.register(Database)
class Entry_database(admin.ModelAdmin):
    pass

@admin.register(Company)
class Entry_company(admin.ModelAdmin):
    pass

#@admin.register(Staff)
#class Entry_staff(admin.ModelAdmin):
#    pass


