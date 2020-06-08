# pylint: disable=no-member, no-self-use
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Liked
from disliked.models import Disliked
from disliked.serializer import DislikedSerializer
from jwt_auth.models import User
from .serializer import LikedSerializer, PopulatedLikedSerializer


class LikedListView(APIView):

    permission_classes = (IsAuthenticated, )

    ##? Check target user exists
    def find_user(self, request):
        try:
            return User.objects.get(id=request)
        except User.DoesNotExist:
            raise NotFound({'message': 'Not a valid user'})

    ##? Liked User 
    ## TESTED? ##! YES
    ## ERRORS TESTED? ##! YES
    def post(self, request):
        request.data['owner'] = request.user.id
        liked_user = request.data['liked_user']
        self.find_user(liked_user)
        add_to_favs = LikedSerializer(data=request.data)
        if add_to_favs.is_valid():
            add_to_favs.save()
            return Response(add_to_favs.data, status=status.HTTP_202_ACCEPTED)

class LikedDeleteView(APIView):

    permission_classes = (IsAuthenticated, )

    def find_user_in_liked(self, pk):
        try:
            return Liked.objects.get(pk=pk)
        except Liked.DoesNotExist:
            raise NotFound({'message': 'User not found'})

    def add_to_disliked_list(self, pk):
        try:
            disliked = Disliked.objects.push(pk=pk)
            return DislikedSerializer(disliked)
        except:
            PermissionDenied()

    def delete(self, request, pk):
        request.data['owner'] = request.user.id
        fav_to_remove = self.find_user_in_liked(pk)
        print(fav_to_remove)
        add_to_disliked = self.add_to_disliked_list(fav_to_remove)
        # add_to_disliked = DislikedSerializer(data=add_to_disliked)
        # if add_to_dislikes.is_valid():
        #     add_to_dislikes.push()
        # fav_to_remove.delete()
        return Response({'message': 'Removed from favourites'})


