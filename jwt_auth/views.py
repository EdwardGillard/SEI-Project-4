# pylint: disable=no-member, no-self-use
##? Import timestamps for making token's expiry.
from datetime import datetime, timedelta 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied, NotFound
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework import status
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .serializers import UserSerializer, PopulatedUserSerializer, UpdateUserSerializer

##? Get the user
User = get_user_model()

class RegisterView(APIView):

    ##? POST request to provide information for registration.
    ## TESTED? ##!YES
    ## ERRORS TESTED? ##!YES
    def post(self, request):
        ##? Send request data to serializer for password validation.
        serializer = UserSerializer(data=request.data) 
        if serializer.is_valid(): ##? If new user comes back valid from the serializer.
            serializer.save() ##? save the serialized data.
            return Response({ 'Message': 'Registration Successful'}, status=status.HTTP_201_CREATED) ## return a positive response.
        return Response(serializer.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY) ##! If unsuccessful return 422 and errors.

class LoginView(APIView):
    
    ##? Seperate function to retrieve the user.
    def get_user(self, email):
        try:
            return User.objects.get(email=email) ##? Try getting the user.
        except User.DoesNotExist: ##! if the user doesnt exist.
            raise PermissionDenied() ##! refuse permission.

    ##? POST request to login.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def post(self, request):
        email = request.data.get('email') ##? Retrieve users email address from the req data.
        password = request.data.get('password') ##? Retrieve users password from req data.
        user = self.get_user(email) ##? pass the retrieved email address to the get_user function to search.
        if not user.check_password(password): ##! Once user information has been returned check the password...
            raise PermissionDenied() ##! if user's password isnt correct throw permission denied error.
        dt = datetime.now() + timedelta(days= 7) ##? get the time now and 7 days for expiry
        token = jwt.encode({ ##? use jwt to encode a 3 part token using user id, expiration date and secret key.
            'sub': user.id, 
            'exp': int(dt.strftime('%s'))
        }, settings.SECRET_KEY)
        return Response({'token': token, 'message': f'Welcome back {user.username}'})

class ProfileListView(APIView):

    ##? GET all users.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def get(self, request):
        users = User.objects.all()
        serialized_users = UserSerializer(users, many=True)
        return Response(serialized_users.data, status=status.HTTP_200_OK)

class ProfileView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? confirm user is legit.
    def get_user(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise NotFound()
    
    ##? GET current user.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def get(self, request):
        user = self.get_user(username=request.user.username)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)

    ##? UPDATE user information.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def put(self, request):
        user_to_update = self.get_user(username= request.user.username)
        updated_user = UpdateUserSerializer(user_to_update, data=request.data, context={'request': 'update'})
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    ##? DELETE User profile
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def delete(self, request):
        user_to_delete = self.get_user(username= request.user.username)
        user_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class ProfileDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? Get the user.
    def get_user(self, username):
        try:
            return User.objects.get(username=username)
        except User.DoesNotExist:
            raise NotFound()

    ##? GET a target User.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def get(self, _request, username):
        user = self.get_user(username)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    

    


