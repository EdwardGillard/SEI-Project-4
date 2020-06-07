from django.urls import path
from .views import ResponsesListView

urlpatterns = [
    path('', ResponsesListView.as_view())
]
