from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.apps import apps

from chats.models import Chat
from .models import Responses
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image')

# class ChatsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Chat
#         fields = ('id', )

class ResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = '__all__'

class PopulatedResponseSerializer(ResponsesSerializer):
    # chat = ChatsSerializer()
    owner = UserSerializer()