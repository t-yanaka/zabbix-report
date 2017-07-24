from django.contrib import admin

from .models import Cace, Database


@admin.register(Cace)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Database)
class Entry(admin.ModelAdmin):
    pass

