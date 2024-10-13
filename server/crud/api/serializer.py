from rest_framework import serializers
from .models import Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        # fields = '__all__'
        fields = ('firstName', 'lastName', 'email', 'phone', 'detail', 'isActive', 'createdAt')