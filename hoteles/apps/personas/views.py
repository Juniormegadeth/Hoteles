from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from apps.personas.models import *
from apps.personas.serializers import *

## Crud Reserva

class ReservaView(ListAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

    def get(self, request, *args, **kwargs):
        reservaData = ReservaSerializer(self.get_queryset(), many=True)
        return Response(reservaData.data, status=status.HTTP_200_OK)

class ReservaViewOwner(ListAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

    def get(self, request, *args, **kwargs):
        ReservaData = ReservaSerializer(self.get_queryset(), many=True)
        return Response(ReservaData.data, status=status.HTTP_200_OK)

class ReservaCreate(CreateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

    def post(self, request, *args, **kwargs):
        createData = ReservaSerializer(data=request.data)
        if createData.is_valid():
            createData.save()
            return Response(createData.data, status=status.HTTP_200_OK)
        return Response(createData.errors, status=status.HTTP_400_BAD_REQUEST)

class ReservaUpdate(UpdateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer


class ReservaDelete(DestroyAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

## Crud Agencia

class AgenciaView(ListAPIView):
    queryset = Agencia.objects.all()
    serializer_class = AgenciaSerializer

    def get(self, request, *args, **kwargs):
        agenciaData = AgenciaSerializer(self.get_queryset(), many=True)
        return Response(agenciaData.data, status=status.HTTP_200_OK)

class AgenciaViewOwner(ListAPIView):
    queryset = Agencia.objects.all()
    serializer_class = AgenciaSerializer

    def get(self, request, *args, **kwargs):
        AgenciaData = AgenciaSerializer(self.get_queryset(), many=True)
        return Response(AgenciaData.data, status=status.HTTP_200_OK)

class AgenciaCreate(CreateAPIView):
    queryset = Agencia.objects.all()
    serializer_class = AgenciaSerializer

    def post(self, request, *args, **kwargs):
        createData = AgenciaSerializer(data=request.data)
        if createData.is_valid():
            createData.save()
            return Response(createData.data, status=status.HTTP_200_OK)
        return Response(createData.errors, status=status.HTTP_400_BAD_REQUEST)

class AgenciaUpdate(UpdateAPIView):
    queryset = Agencia.objects.all()
    serializer_class = AgenciaSerializer


class AgenciaDelete(DestroyAPIView):
    queryset = Agencia.objects.all()
    serializer_class = AgenciaSerializer