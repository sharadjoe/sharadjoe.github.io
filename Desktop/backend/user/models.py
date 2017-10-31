from django.db import models

# Create your models here.

class consumers(models.Model):
    user_name=models.CharField(max_length=50)
    user_first_name=models.CharField(max_length=50)
    user_last_name=models.CharField(max_length=50)
    user_email=models.CharField(max_length=50)
    user_semester=models.IntegerField()
    user_address=models.CharField(max_length=200)
    user_college=models.CharField(max_length=50)
    user_postalcode=models.IntegerField()
