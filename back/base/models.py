from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Task(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    profile_pic = models.ImageField(default="profile1.png", null=True, blank=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    date = models.DateField()
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        order_with_respect_to = 'user'


class Contact(models.Model):
    full_name = models.CharField(max_length=250)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=20)
    profile_pic = models.ImageField(default="profile1.png", null=True, blank=True)

    def __str__(self):
          return self.full_name

class Money(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, blank=True)
    suma1 = models.FloatField(default = 0.0)
    suma2= models.FloatField(default=0.0)
    date = models.DateField()
    complete = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title