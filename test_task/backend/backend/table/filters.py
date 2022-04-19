import django_filters
from table.models import Table


class TableFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')

    quantity = django_filters.NumberFilter()
    quantity__gt = django_filters.NumberFilter(field_name='quantity', lookup_expr='gt')
    quantity__lt = django_filters.NumberFilter(field_name='quantity', lookup_expr='lt')

    distance = django_filters.NumberFilter()
    distance__gt = django_filters.NumberFilter(field_name='distance', lookup_expr='gt')
    distance__lt = django_filters.NumberFilter(field_name='distance', lookup_expr='lt')

    date = django_filters.DateTimeFilter()
    date__gt = django_filters.DateTimeFilter(field_name='date', lookup_expr='gt')
    date__lt = django_filters.DateTimeFilter(field_name='date', lookup_expr='lt')

    class Meta:
        model = Table
        fields = ('name', 'quantity', 'distance', 'date')