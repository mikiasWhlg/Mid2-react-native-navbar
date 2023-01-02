from rest_framework import serializers
from .models import employe


class employeSerializers(serializers.ModelSerializer):
    class Meta:
        model = employe
        fields = '__all__'
