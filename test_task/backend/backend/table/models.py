from django.db import models


class Table(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=255)
    quantity = models.PositiveIntegerField()
    distance = models.PositiveIntegerField()