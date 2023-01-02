from django.db import models


class student (models.Model):
    studentName = models.CharField(max_length=100)
    Grade = models.CharField(max_length=10)


def str(self):
    return (self.Grade)
