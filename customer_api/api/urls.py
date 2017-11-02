# coding: utf-8

from django.conf.urls import url
from . import views
from . import tables_views
from rest_framework import routers
#from .views import CompanyViewSet, CaceViewSet, StaffViewSet, DatabaseViewSet
from .views import CompanyViewSet, CaceViewSet, DatabaseViewSet

urlpatterns = [
    url(r'^$', tables_views.tables_index, name='tables_index'),
    url(r'^add$', tables_views.tables_add, name='tables_add'),
    url(r'^columns$', tables_views.columns_index, name='columns_index'),
]

router = routers.DefaultRouter()
router.register(r'company', CompanyViewSet)
router.register(r'cace', CaceViewSet)
#router.register(r'staff', StaffViewSet)
router.register(r'database', DatabaseViewSet)
#router.register(r'skill', SkillViewSet)
#router.register(r'skillCategory', SkillCategoryViewSet)

#urlpatterns = [
#   url(r'^$', views.skill, name='skill'),  # urlとviewの結びつけ
#   url(r'^$', views.tables_view, name='tables_view'),
#   url(r'^$', views.columns_view, name='index_view')
#]
