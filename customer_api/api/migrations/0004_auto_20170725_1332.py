# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-25 04:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20170725_1324'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cace',
            old_name='Monitoring_server',
            new_name='monitoring_server',
        ),
    ]
