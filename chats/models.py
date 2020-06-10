from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Chat(models.Model):
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='outbox',
        on_delete=models.CASCADE
    )
    second_user = models.ForeignKey(
        'jwt_auth.User',
        related_name='inbox',
        on_delete=models.CASCADE
    )