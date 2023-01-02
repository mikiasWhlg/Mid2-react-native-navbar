from django.shortcuts import render
from rest_framework import generics
from .models import teachers
from .serializers import teachersSerializers


class teacherstList(generics.ListCreateAPIView):
    queryset = teachers.objects.all()
    serializer_class = teachersSerializers


class teachersDetials(generics.RetrieveUpdateDestroyAPIView):
    queryset = teachers.objects.all()
    serializer_class = teachersSerializers
