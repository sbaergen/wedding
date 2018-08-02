from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (
    RetrieveAPIView,
    ListAPIView,
    )
from django.shortcuts import render
from .serializers import *
from wedding.models import *

class GuestDetailAPIView(ListAPIView):
    serializer_class = GuestDetailSerializer

    def get_queryset(self):
        queryset = Guest.objects.all()
        rsvpid_param = self.request.query_params.get('rsvp')
        name_param = self.request.query_params.get('name')

        if rsvpid_param is not None and name_param is not None:
            queryset = Guest.objects.filter(name=name_param, rsvp=rsvpid_param)
        elif rsvpid_param is not None:
            queryset = Guest.objects.filter(rsvp=rsvpid_param)
        elif name_param is not None:
            queryset = Guest.objects.filter(name=name_param)
        return queryset

class RegistryDetailAPIView(ListAPIView):
    queryset = Registry.objects.all()
    serializer_class = RegistryDetailSerializer

class DietaryDetailAPIView(ListAPIView):
    serializer_class = DietaryDetailSerializer

    def get_queryset(self):
        queryset = Dietary.objects.all()
        guest_param = self.request.query_params.get('guest')

        if guest_param is not None:
            queryset = Dietary.objects.filter(guest_id=guest_param)
        return queryset
class PictureListAPIView(ListAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

def homepage(request):
    return render(request, 'index.html')
