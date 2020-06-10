from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps

from .models import Liked
User = get_user_model()

class LikedUserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('id', 'username', 'profile_image')

class LikedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Liked
        fields = '__all__'

class PopulatedLikedSerializer(LikedSerializer):
    liked_user = LikedUserSerializer()