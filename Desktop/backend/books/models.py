from django.db import models

# Create your models here.
class book(models.Model):
    book_author = models.CharField(max_length=50)
    book_semester = models.IntegerField()
    book_department = models.CharField(max_length=100)
    book_price = models.IntegerField()
    book_owner_username = models.CharField(max_length=100)
    book_status = models.CharField(max_length=100)
