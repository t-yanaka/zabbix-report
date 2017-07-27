# coding: utf-8

from rest_framework import routers
#from .views import CompanyViewSet, CaceViewSet, StaffViewSet, DatabaseViewSet
from .views import CompanyViewSet, CaceViewSet, DatabaseViewSet

router = routers.DefaultRouter()
router.register(r'company', CompanyViewSet)
router.register(r'cace', CaceViewSet)
#router.register(r'staff', StaffViewSet)
router.register(r'database', DatabaseViewSet)
