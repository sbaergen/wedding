# Generated by Django 2.0.6 on 2018-07-31 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wedding', '0002_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rsvp',
            name='code',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]