from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .models import Client
from . serializer import ClientSerializer

# Create your views here.
@api_view(['GET'])
def get_clients(request):
    clients = Client.objects.all()
    serializedData = ClientSerializer(clients, many=True).data
    return Response(serializedData)

@api_view(['POST'])
def create_client(request):
    context = {}
    data = request.data
    serializer = ClientSerializer(data=data)
    subject = 'Appointment Booking From ' + data.get('firstName') + ' ' + data.get('lastName')
    message = 'Hi George,\n\n' + data.get('firstName') + ' ' + data.get("lastName") + ' requested an appointment on ' + data.get('appointmentDate') + ' with these details\n' + data.get("detail") + '.\nPlease contact them via ' + data.get("email") + ' or ' + data.get("phone") + '. Thank you. \n\nRegards, \nSystem Administrator'
    if serializer.is_valid():
        try:
            send_mail(subject, message, settings.EMAIL_HOST_USER, ['george@windsorpl.com.au'])
            context['result'] = 'Email sent successfully'
        except Exception as e:
            context['result'] = f'Error sending email: {e}'
        serializer.save()
        return Response(context, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)