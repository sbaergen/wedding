# Generated by Django 2.0.6 on 2019-02-07 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wedding', '0015_registry_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registry',
            name='category',
            field=models.CharField(blank=True, choices=[('F', 'Furniture'), ('G', 'Games'), ('H', 'House'), ('K', 'Kitchen'), ('T', 'Travel'), ('A', 'Other')], max_length=1),
        ),
    ]
