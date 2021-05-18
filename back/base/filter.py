import django_filters
from .models import Task,Contact,Money


class AppFilter(django_filters.FilterSet):

    CHOICES = (
        'Ascending','ascending',
        'Descending','descending'
    )

    ordering = django_filters.ChairFilter(label = 'Ordering',choices = CHOICES,method = 'filter_order')
     
    class Meta:
        model = Task
        fields = {
            'name': ['icontains'],
            'date': ['iexact']
       }
     

    def filter_order(self,queryset,name,value):
        expression = 'date' if value == 'ascending' else '-date'
        return queryset.order_by(expression)
