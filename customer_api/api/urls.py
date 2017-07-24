# coding: utf-8

from rest_framework import routers
from .views import CaceViewSet, DatabaseViewSet


router = routers.DefaultRouter()
router.register(r'cace', CaceViewSet)
router.register(r'database', DatabaseViewSet)
