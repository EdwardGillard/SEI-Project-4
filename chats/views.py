# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Chat
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
    # TESTED? ##! YES
    # ERRORS TESTED? ##! YES
    def post(self, request):
        request.data['owner'] = request.user.id
        self.find_user(request.data['second_user'])
        start_chat = ChatsSerializer(data=request.data)
        if start_chat.is_valid():
            if Chat.objects.filter(owner=start_chat.validated_data.get('owner')).filter(second_user=start_chat.validated_data.get('second_user')).count() != 0:
                return Response({ 'message': 'Duplicated chat'}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
            if Chat.objects.filter(owner=start_chat.validated_data.get('second_user')).filter(second_user=start_chat.validated_data.get('owner')).count() != 0:
                return Response({ 'message': 'Duplicated chat'}, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
            start_chat.save()
            return Response(start_chat.data, status=status.HTTP_201_CREATED)

