from __future__ import unicode_literals

from django.db import models

# Create your models here.
class user_detail(models.Model):
    user_id = models.IntegerField()
    user_name = models.CharField(max_length=100)
    user_password = models.CharField(max_length=100)
    user_email = models.CharField(max_length=100)
    user_phone_no = models.IntegerField()
    user_review = models.CharField(max_length=100)
