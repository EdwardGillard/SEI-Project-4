from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps

from .models import Disliked
User = get_user_model()

class DislikedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')

class DislikedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disliked
        fields = '__all__' 

class PopulatedDislikedSerializer(DislikedSerializer):
    owner = DislikedUserSerializer()