from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from rest_framework.generics import (
    RetrieveAPIView,
    ListAPIView,
    )
from rest_framework.viewsets import ModelViewSet
from django.shortcuts import render
from django.core.mail import send_mail
from .serializers import *
from wedding.models import *
from weddingsitedjango.settings import EMAIL_HOST_USER

class GuestDetailAPIView(ModelViewSet):
    serializer_class = GuestDetailSerializer
    def get_queryset(self):
        queryset = Guest.objects.all()
        rsvpid_param = self.request.query_params.get('rsvp')
        name_param = self.request.query_params.get('name')
        added_param = self.request.query_params.get('added')
        if rsvpid_param is not None:
            queryset = queryset.filter(rsvp=rsvpid_param)
        if name_param is not None:
            queryset = queryset.filter(name=name_param)
        if added_param is not None:
            queryset = queryset.filter(added=added_param)
        return queryset

    def put(self, request, pk):
        try:
            guest = Guest.objects.get(pk.data.guestid)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = GuestDetailSerializer(guest, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        rsvp_param = self.request.query_params.get('rsvp')
        record = Guest.objects.filter(rsvp=rsvp_param, added="True")
        record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RegistryDetailAPIView(ModelViewSet):
    queryset = Registry.objects.all()
    serializer_class = RegistryDetailSerializer

    def patch(self, request, pk):
        item = self.get_object(pk)
        serialier = RegistryDetailSerializer(item, data=request.data, partial=True)
        if serialier.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DietaryDetailAPIView(ModelViewSet):
    serializer_class = DietaryDetailSerializer

    def get_queryset(self):
        queryset = Dietary.objects.all()
        guest_param = self.request.query_params.get('guest')

        if guest_param is not None:
            queryset = Dietary.objects.filter(guest_id=guest_param)
        return queryset
    def delete(self, request):
        guest_param = self.request.query_params.get('guest')
        record = Dietary.objects.filter(guest_id=guest_param)
        record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class PictureListAPIView(ListAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer

class ContributionDetailAPIView(ModelViewSet):
    serializer_class = ContributionDetailSerializer
    queryset = Contribution.objects.all()

    def get_queryset(self):
        queryset = Contribution.objects.all()
        item_param = self.request.query_params.get('item')
        name_param = self.request.query_params.get('name')
        code_param = self.request.query_params.get('code')
        if item_param is not None:
            queryset = queryset.filter(itemid = item_param)
        if name_param is not None:
            queryset = queryset.filter(name = name_param)
        if code_param is not None:
            queryset = queryset.filter(code = code_param)
        return queryset

    def delete(self, request):
        code_param = self.request.query_params.get('code')
        record = Contribution.objects.filter(code = code_param)
        record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(methods=['post'], detail=False)
    def email(self, request, pk=None):
        print(request.data)
        send_mail(request.data["subject"], "TEST", EMAIL_HOST_USER, [request.data["toEmail"]], html_message=request.data["message"], fail_silently=False)
        return Response(status=status.HTTP_204_NO_CONTENT)

def homepage(request):
    return render(request, 'index.html')


