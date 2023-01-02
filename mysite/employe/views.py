from django.shortcuts import render
from rest_framework import generics
from .models import employe
from .serializers import employeSerializers


class employeestList(generics.ListCreateAPIView):
    queryset = employe.objects.all()
    serializer_class = employeSerializers


class employeeDetials(generics.RetrieveUpdateDestroyAPIView):
    queryset = employe.objects.all()
    serializer_class = employeSerializers
