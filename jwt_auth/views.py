
##? Import timestamps for making token's expiry.
from datetime import datetime, timedelta 
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .serializers import UserSerializer, PopulatedUserSerializer

##? Get the user
User = get_user_model()

class RegisterView(APIView):


    ##? Post request to provide information for registration.
    ## tested? yes
    ## Errors tested? yes
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

    ##? Function to post login details and confirm users legitimacy.
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

class ProfileView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)

