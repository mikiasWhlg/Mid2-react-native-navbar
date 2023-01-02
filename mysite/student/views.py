from django.shortcuts import render
from rest_framework import generics
from .models import student
from .serializers import studentSerializers


class studentList(generics.ListCreateAPIView):
    queryset = student.objects.all()
    serializer_class = studentSerializers


class studentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = student.objects.all()
    serializer_class = studentSerializers
