# Generated by Django 5.0 on 2025-02-04 07:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BLogApp', '0002_remove_category_slug_alter_post_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(null=True, upload_to='images'),
        ),
    ]
