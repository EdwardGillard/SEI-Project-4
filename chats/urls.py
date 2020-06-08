from django.urls import path
from .views import ChatsListView

urlpatterns = [
    path('<int:pk>/', ChatsListView.as_view())
]