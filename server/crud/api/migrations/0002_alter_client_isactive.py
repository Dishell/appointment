# Generated by Django 5.0.2 on 2024-09-18 00:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='isActive',
            field=models.BooleanField(default=True),
        ),
    ]
