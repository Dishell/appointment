from django.urls import path
from .views import get_clients, create_client

urlpatterns = [
    path('clients/', get_clients, name='get_clients'),
    path('clients/create/', create_client, name='create_client')
]