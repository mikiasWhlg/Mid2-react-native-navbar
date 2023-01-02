from rest_framework import serializers
from .models import teachers


class teachersSerializers(serializers.ModelSerializer):
    class Meta:
        model = teachers
        fields = '__all__'
