# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-25 04:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cace',
            name='memo',
            field=models.TextField(),
        ),
    ]
