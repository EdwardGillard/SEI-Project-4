# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Liked
from jwt_auth.models import User
from .serializer import LikedSerializer, PopulatedLikedSerializer


class LikedListView(APIView):

    permission_classes = (IsAuthenticated, )

    def find_user(self, request):
        try:
            return User.objects.get(id=request)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Not a valid user'})

    def post(self, request):
        request.data['owner'] = request.user.id
        liked_user = request.data['liked_user']
        self.find_user(liked_user)
        add_to_favs = LikedSerializer(data=request.data)
        print(add_to_favs)
        if add_to_favs.is_valid():
            add_to_favs.save()
            return Response(add_to_favs.data, status=status.HTTP_202_ACCEPTED)

