# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from chats.models import Chat
from jwt_auth.models import User

from .serializers import ResponsesSerializer


class ResponsesListView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? FIND the chat.
    def find_chat(self, pk):
        try:
            return Chat.objects.get(pk=pk)
        except Chat.DoesNotExist:
            raise PermissionDenied({'message': 'Unable to find this chat'})
    
    ##? POST to chat.
    ## TESTED? ##! NO
    ## ERRORS TESTED? ##! NO
    def post(self, request, pk):
        request.data['owner'] = request.user.id
        self.find_chat(pk)
        request.data['chat'] = pk
        reply = ResponsesSerializer(data=request.data)
        if reply.is_valid():
            reply.save()
            return Response(reply.data, status=status.HTTP_201_CREATED)
