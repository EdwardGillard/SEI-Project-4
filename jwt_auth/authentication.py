from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

##? Get the user model.
User = get_user_model()

##! Authentication route to ensure token is correct.
class JWTAuthentication(BasicAuthentication):

    ##? Function to authenticate user.
    def authenticate(self, request):
        
        ##? Get from the headers field labeled Authorization.
        header = request.headers.get('Authorization')
        if not header: ##! If theres no header...
            return None ##! Limits authorization if the user isnt logged in.
        if not header.startswith('Bearer '): ##! If header does not have the prefix 'Bearer '.
            raise PermissionDenied({ 'message': 'Invalid Authorization Header'}) ##! throw an error with a message 'invalid authorization header.
        token = header.replace('Bearer ', '') ##? If user reaches this point replace the 'Bearer ' with nothing exposing only the token.
        try: 
            payload = jwt.decode(token, settings.SECRET_KEY) ##? Use the imported secret key in settings to decode the token using jwt.
            user = User.objects.get(pk=payload.get('sub')) ##? Find and store the user by extracting the 'sub' from the payload and using it as the Primary Key.
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({ 'message': 'Invalid Token'}) ##! if the token is invalid throw an error 'invalid token'.
        except User.DoesNotExist: 
            raise PermissionDenied({ 'message': 'User Not Found' }) ##! if user does not exist throw an error 'user not found'.
        return (user, token) ## If successful through all authentication checks return the current user and their token. 