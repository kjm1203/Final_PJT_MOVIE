# Generated by Django 4.2.16 on 2024-11-24 07:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Survey',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('preferred_genres', models.JSONField(default=list)),
                ('movie_style', models.CharField(max_length=50)),
                ('viewing_reason', models.CharField(max_length=50)),
                ('viewing_with', models.CharField(max_length=50)),
                ('favorite_actor', models.CharField(blank=True, max_length=100)),
                ('movie_elements', models.JSONField(default=list)),
                ('favorite_movies', models.TextField(blank=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
