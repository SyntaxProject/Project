from django.contrib import admin
from .models import Task, Contact, Money

admin.site.register(Task)
admin.site.register(Contact)
admin.site.register(Money)