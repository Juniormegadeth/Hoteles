from rest_framework import serializers
from apps.hoteles.models import *

class HotelesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hoteles
        fields=('__all__')

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields=('__all__')
