from rest_framework import serializers
## import django functions to get user and validated password.
from django.contrib.auth import get_user_model, password_validation as validations 
from django.contrib.auth.hashers import make_password ## contains bcrypt to encrypt password
from django.core.exceptions import ValidationError

from liked.serializer import PopulatedLikedSerializer
from disliked.serializer import PopulatedDislikedSerializer
from chats.serializers import PopulatedChatSerializer
## get the user
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True) ##? write_only ensures password is not sent in json responses. 
    password_confirmation = serializers.CharField(write_only=True) ##? Password confirmation also write_only

    ##? Validate password using dictionary of fields user is trying to create.
    def validate(self, data):
        password = data.pop('password') ##removes password off of the data
        password_confirmation = data.pop('password_confirmation')
        if password !=password_confirmation: ##! If the password doesnt match the password confirmation...
            raise ValidationError({'password': 'Does not match'}) ##! Throw validation error 'password doesnt match'.
        # try :
        #     validations.validate_password(password=password)
        # except ValidationError as err:
        #     raise ValidationError({'password', err.messages}) ##! throw error if the password doesnt meet django password validation criteria
        data['password'] = make_password(password) ##? once all criteria are met encrypt the password 
        return data ##? return the data for usage

    class Meta:
        model = User
        fields = '__all__'

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PopulatedUserSerializer(UserSerializer):
    liked_user=PopulatedLikedSerializer(many=True)
    liked_owner=PopulatedLikedSerializer(many=True)
    disliked_owner=PopulatedDislikedSerializer(many=True)
    disliked_user=PopulatedDislikedSerializer(many=True)
    chat_user_one=PopulatedChatSerializer(many=True)
    chat_user_two=PopulatedChatSerializer(many=True)




