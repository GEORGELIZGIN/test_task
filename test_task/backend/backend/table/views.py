from django.shortcuts import render
from rest_framework import viewsets 
from table.serializers import TableSerializer
from table.models import Table
from rest_framework.pagination import PageNumberPagination
from table.filters import TableFilter
from django_filters import rest_framework as filters
from rest_framework.filters import OrderingFilter

class PageCustomPaginator(PageNumberPagination):
    page_query_param = 'page'
    page_size_query_param = 'limit'

# Create your views here.from django_filters.rest_framework import DjangoFilterBackend
class TableViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
    pagination_class = PageCustomPaginator
    filter_backends = (OrderingFilter, filters.DjangoFilterBackend,)
    ordering_fields = ('name', 'quantity', 'distance')
    filterset_class = TableFilter
    ordering_fields = ['name', 'quantity', 'distance']