# Generated by Django 2.0.6 on 2018-06-13 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wedding', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(upload_to='pictures/')),
            ],
        ),
    ]
