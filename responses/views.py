# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from chats.models import Chats
from jwt_auth.models import User

from .serializers import ResponsesSerializer


class ResponsesListView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? FIND the chat.
    def find_chat(self, request):
        try:
            return Chats.objects.get(id=request)
        except Chats.DoesNotExist:
            raise PermissionDenied({'message': 'Unable to find this chat'})
    
    ##? POST to chat.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def post(self, request):
        request.data['owner'] = request.user.id
        chat = request.data['chat']
        self.find_chat(chat)
        responses = ResponsesSerializer(data=request.data)
        if responses.is_valid():
            responses.save()
            return Response(responses.data, status=status.HTTP_201_CREATED)
