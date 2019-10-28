from django.db import models

# Create your models here.

class Emp(models.Model):
    empname = models.CharField(max_length=90)    

# def __str__(self):
#     return self.empname