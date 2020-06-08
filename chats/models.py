from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Chats(models.Model):
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='chat_user_one',
        on_delete=models.CASCADE
    )
    second_user = models.ForeignKey(
        'jwt_auth.User',
        related_name='chat_user_two',
        on_delete=models.CASCADE
    )