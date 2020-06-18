from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/liked/', include('liked.urls')),
    path('api/disliked/', include('disliked.urls')),
    path('api/chats/', include('chats.urls')),
    path('api/responses/', include('responses.urls')),
    re_path(r'^.*$', index)
]
