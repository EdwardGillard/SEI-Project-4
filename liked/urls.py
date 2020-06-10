from django.urls import path
from .views import LikedListView

urlpatterns = [
    path('', LikedListView.as_view())
]
