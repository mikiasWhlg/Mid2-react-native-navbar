from django.db import models


class teachers (models.Model):
    teachersName = models.CharField(max_length=100)
    course = models.CharField(max_length=10)


def str(self):
    return (self.course)
