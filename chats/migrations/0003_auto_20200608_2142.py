# Generated by Django 3.0.7 on 2020-06-08 21:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0002_auto_20200608_2114'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chats',
            old_name='current_user',
            new_name='owner',
        ),
    ]
