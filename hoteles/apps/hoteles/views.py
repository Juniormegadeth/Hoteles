from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import ListAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from apps.hoteles.models import *
from apps.hoteles.serializers import *

class HotelesView(ListAPIView):
    queryset = Hoteles.objects.all()
    serializer_class = HotelesSerializer

    def get(self, request, *args, **kwargs):
        hotelesData = HotelesSerializer(self.get_queryset(), many=True)
        return Response(hotelesData.data, status=status.HTTP_200_OK)

class HotelesViewOwner(ListAPIView):
    queryset = Hoteles.objects.all()
    serializer_class = HotelesSerializer

    def get(self, request, *args, **kwargs):
        HotelesData = HotelesSerializer(self.get_queryset(), many=True)
        return Response(HotelesData.data, status=status.HTTP_200_OK)

class HotelesCreate(CreateAPIView):
    queryset = Hoteles.objects.all()
    serializer_class = HotelesSerializer

    def post(self, request, *args, **kwargs):
        createData = HotelesSerializer(data=request.data)
        if createData.is_valid():
            createData.save()
            return Response(createData.data, status=status.HTTP_200_OK)
        return Response(createData.errors, status=status.HTTP_400_BAD_REQUEST)

class HotelesUpdate(UpdateAPIView):
    queryset = Hoteles.objects.all()
    serializer_class = HotelesSerializer


class HotelesDelete(DestroyAPIView):
    queryset = Hoteles.objects.all()
    serializer_class = HotelesSerializer

## Crud Categoria


class CategoriaView(ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

    def get(self, request, *args, **kwargs):
        categoriaData = CategoriaSerializer(self.get_queryset(), many=True)
        return Response(categoriaData.data, status=status.HTTP_200_OK)

class CategoriaViewOwner(ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

    def get(self, request, *args, **kwargs):
        CategoriaData = CategoriaSerializer(self.get_queryset(), many=True)
        return Response(CategoriaData.data, status=status.HTTP_200_OK)

class CategoriaCreate(CreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

    def post(self, request, *args, **kwargs):
        createData = CategoriaSerializer(data=request.data)
        if createData.is_valid():
            createData.save()
            return Response(createData.data, status=status.HTTP_200_OK)
        return Response(createData.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoriaUpdate(UpdateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class CategoriaDelete(DestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer