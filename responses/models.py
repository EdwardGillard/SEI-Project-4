from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Responses(models.Model):
    chat = models.ForeignKey(
        'chats.Chat',
        related_name='reply',
        on_delete=models.CASCADE
    )
    reply = models.CharField(max_length= 500)
    owner= models.ForeignKey(
        'jwt_auth.User',
        related_name='owner',
        on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)