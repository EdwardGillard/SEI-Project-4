from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps

from responses.serializers import PopulatedResponseSerializer
from .models import Chats
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image')

class ChatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chats
        fields = '__all__'

class PopulatedChatSerializer(ChatsSerializer):
    owner = UserSerializer()
    second_user = UserSerializer()
    response=PopulatedResponseSerializer(many=True)