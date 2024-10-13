from django.contrib import admin
from .models import Client

class ClientAdmin(admin.ModelAdmin):
    list_display = ('firstName', 'lastName', 'email', 'phone', 'detail', 'isActive', 'createdAt')

# Register your models here.

admin.site.register(Client, ClientAdmin)