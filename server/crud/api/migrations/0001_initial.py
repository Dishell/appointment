# Generated by Django 5.0.2 on 2024-09-14 04:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=25)),
                ('lastName', models.CharField(max_length=25)),
                ('email', models.CharField(max_length=25)),
                ('phone', models.CharField(max_length=10)),
                ('subject', models.CharField(max_length=50)),
                ('detail', models.TextField(blank=True)),
                ('isActive', models.BooleanField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
