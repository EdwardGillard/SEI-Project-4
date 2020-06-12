from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinLengthValidator
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    
    class Gender(models.TextChoices):
        MALE = 'M', _('Male')
        FEMALE = 'F', _('Female')

    class GenderPref(models.TextChoices):
        MALE = 'M', _('Male')
        FEMALE = 'F', _('Female')
        BOTH = 'B', _('Both')

    email = models.CharField(max_length=50, unique=True)
    profile_image = models.CharField(max_length= 300)
    about_bio = models.CharField(max_length= 400, validators=[MinLengthValidator(50)])
    first_name = models.CharField(max_length= 50)
    gender = models.CharField(
        max_length=2,
        choices = Gender.choices,
    )
    gender_preference = models.CharField(
        max_length=2,
        choices = GenderPref.choices,
    )
    music_preferences = models.CharField(max_length= 300, validators=[MinLengthValidator(50)])
    film_preferences = models.CharField(max_length= 300, validators=[MinLengthValidator(50)])
    political_preferences = models.CharField(max_length= 300, validators=[MinLengthValidator(50)])
    television_preferences = models.CharField(max_length= 300, validators=[MinLengthValidator(50)])
    literature_preferences = models.CharField(max_length= 300, validators=[MinLengthValidator(50)])
    other_interests = models.CharField(max_length= 300, validators=[MinLengthValidator(50)])

