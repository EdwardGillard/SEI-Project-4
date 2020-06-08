# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Chats
from jwt_auth.models import User

from .serializers import ChatsSerializer


class ChatsListView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? Function to find a user in user model.
    def find_user(self, request):
        try:
            return User.objects.get(id=request)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Not a valid user'})

    ##? POST to start a chat.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def post(self, request):
        request.data['owner'] = request.user.id
        self.find_user(request.data['second_user'])
        start_chat = ChatsSerializer(data=request.data)
        if start_chat.is_valid():
            start_chat.save()
            return Response(start_chat.data, status=status.HTTP_201_CREATED)
