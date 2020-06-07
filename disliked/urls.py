from django.urls import path
from .views import DislikedListView

urlpatterns = [
    path('', DislikedListView.as_view())
]