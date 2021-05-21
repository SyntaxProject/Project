from rest_framework import serializers
from .models import Task, Money, Contact

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'user', 'name', 'description', 'date')


class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = ('id', 'user', 'suma1', 'suma2', 'date')


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'full_name', 'email', 'phone_number')