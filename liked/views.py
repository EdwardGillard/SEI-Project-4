# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied, ValidationError

from .models import Liked
from disliked.models import Disliked
from disliked.serializer import DislikedSerializer
from jwt_auth.models import User
from .serializer import LikedSerializer, PopulatedLikedSerializer


class LikedListView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? TOGGLE BETWEEN LIKED AND DISLIKED IF LIKE ALREADY EXISTS.
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def post(self, request):
        try:
            like = Liked.objects.get(owner=request.user.id, liked_user=request.data['liked_user'])
            like.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Liked.DoesNotExist:
            request.data['owner'] = request.user.id
            created_like = LikedSerializer(data=request.data)
            if created_like.is_valid():
                created_like.save()
                return Response(status=status.HTTP_201_CREATED)
            raise ValidationError()


