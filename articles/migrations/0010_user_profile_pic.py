# Generated by Django 3.1.5 on 2021-01-22 15:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0009_auto_20210118_0056'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(blank=True, null=True, upload_to='users/profile_pics'),
        ),
    ]
