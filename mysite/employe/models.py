from django.db import models


class employe (models.Model):
    EmployeName = models.CharField(max_length=100)
    salary = models.CharField(max_length=10)


def str(self):
    return (self.salary)
