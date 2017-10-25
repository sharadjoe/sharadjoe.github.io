from django.db import models

# Create your models here.
class bookly(models.Model):
    book_author = models.CharField(max_length=50)
    book_printed_year = models.IntegerField()
    book_name = models.CharField(max_length=100)
    book_semester = models.IntegerField()
    book_branch = models.CharField(max_length=100)
    book_price = models.IntegerField()
    book_condition = models.CharField(max_length=100)

    def __str__(self):
        return self.book_name