from rest_framework import serializers
from apps.personas.models import *

class AgenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agencia
        fields=('__all__')

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva
        fields=('__all__')
