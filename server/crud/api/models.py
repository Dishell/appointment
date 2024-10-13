from django.db import models

# Create your models here.
class Client(models.Model):
    firstName = models.CharField(max_length=25)
    lastName = models.CharField(max_length=25)
    email = models.CharField(max_length=25)
    phone = models.CharField(max_length=10)
    detail = models.TextField(blank=True)
    isActive = models.BooleanField(default=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.firstName + '' + self.lastName