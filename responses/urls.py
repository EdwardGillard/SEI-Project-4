from django.urls import path
from .views import ResponsesListView

urlpatterns = [
    path('<int:pk>/', ResponsesListView.as_view())
]
