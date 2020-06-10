from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps

from responses.serializers import PopulatedResponseSerializer
from .models import Chat
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image')

class ChatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = '__all__'

class PopulatedChatSerializer(ChatsSerializer):
    second_user = UserSerializer()
    reply=PopulatedResponseSerializer(many=True)