from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField,
    )

from rest_framework import serializers

from wedding.models import *

class GuestDetailSerializer(ModelSerializer):
    class Meta(object):
        model = Guest
        fields = '__all__'

class RegistryDetailSerializer(ModelSerializer):
    class Meta(object):
        model = Registry
        fields = '__all__'

class DietaryDetailSerializer(ModelSerializer):
    class Meta(object):
        model = Dietary
        fields = '__all__'

class PictureSerializer(ModelSerializer):
    class Meta(object):
        model = Picture
        fields = '__all__'

class ContributionDetailSerializer(ModelSerializer):
    class Meta(object):
        model = Contribution
        fields = '__all__'
