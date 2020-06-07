from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Liked(models.Model):
    liked_user = models.ForeignKey(
        'jwt_auth.User',
        related_name='liked_user',
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User', 
        related_name='liked_owner', 
        on_delete=models.CASCADE
        )

    def __str__(self):
        return f'{self.liked_user}'
