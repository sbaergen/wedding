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
        return queryset

class RSVPDetailAPIView(ListAPIView):
    queryset = RSVP.objects.all()
    serializer_class = RSVPDetailSerializer

class RegistryDetailAPIView(ListAPIView):
    queryset = Registry.objects.all()
    serializer_class = RegistryDetailSerializer

class DietaryDetailAPIView(ListAPIView):
    queryset = Dietary.objects.all()
    serializer_class = DietaryDetailSerializer

class PictureListAPIView(ListAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

def homepage(request):
    return render(request, 'index.html')
