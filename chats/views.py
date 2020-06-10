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

    # ? Function to find a user in user model.
    def find_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound({'message': 'Not a valid user'})
        
    # ? POST to start a chat.
    # TESTED? ##! NOT WORKING FRONT END/ INSOMNIA WORKS
    # ERRORS TESTED? ##! NO
    def post(self, request, pk):
        request.data['owner'] = request.user.id
        request.data['second_user'] = pk
        self.find_user(request.data['second_user'])
        start_chat = ChatsSerializer(data=request.data)
        if start_chat.is_valid():
            start_chat.save()
            return Response(start_chat.data, status=status.HTTP_201_CREATED)
