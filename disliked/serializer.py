from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps

from .models import Disliked
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', )

class DislikedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image')

class DislikedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disliked
        fields = '__all__' 

class PopulatedDislikedSerializer(DislikedSerializer):
    owner = UserSerializer()
    disliked_user = DislikedUserSerializer()