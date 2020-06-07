# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Disliked
from jwt_auth.models import User
from jwt_auth.serializers import PopulatedUserSerializer
from .serializer import DislikedSerializer


class DislikedListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def find_user(self, request):
        try:
            user = User.objects.get(id=request)
            return user
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Not a valid user'})

    def post(self, request):
        request.data['owner'] = request.user.id
        disliked_user = request.data['disliked_user']
        self.find_user(disliked_user)
        add_to_rejects = DislikedSerializer(data=request.data)
        if add_to_rejects.is_valid():
            add_to_rejects.save()
            return Response(add_to_rejects.data, status=status.HTTP_202_ACCEPTED)
