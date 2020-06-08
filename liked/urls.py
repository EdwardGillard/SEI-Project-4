from django.urls import path
from .views import LikedListView, LikedDeleteView

urlpatterns = [
    path('', LikedListView.as_view()),
    path('<int:pk>/', LikedDeleteView.as_view())
]
