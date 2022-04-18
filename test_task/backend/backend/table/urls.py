from django.urls import path
from table import views
from rest_framework import routers

router = routers.SimpleRouter()
router.register('table', views.TableViewSet)

urlpatterns = []

urlpatterns += router.urls