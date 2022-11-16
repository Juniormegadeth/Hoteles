from django.db import models
from apps.hoteles.models import Hoteles

# Create your models here.

class Persona(models.Model):
    cedulaPersona = models.CharField(max_length=10, help_text="Ingrese la Cedula")
    nombrePersona = models.CharField(max_length=100, help_text="Ingrese el Nombre de la Persona")
    apellidoPersona = models.CharField(max_length=100, help_text="Ingrese el Apellido de la Persona")
    direccionPersona = models.CharField(max_length=100, help_text="Ingrese la Direccion de la Persona")
    telefonoPersona = models.CharField(max_length=12, help_text="Ingrese el Telefono de la Persona")
    
    def __str__(self):
        return self.nombrePersona

    class Meta:
        verbose_name = "persona"
        verbose_name_plural = "personas"


class Agencia(models.Model):
    nombreAgencia = models.CharField(max_length=100, help_text="Ingrese el Nombre de la Persona de la agencia")
    direccionAgencia = models.CharField(max_length=100, help_text="Ingrese la Direccion de la Persona de la agencia")
    telefonoAgencia = models.CharField(max_length=12, help_text="Ingrese el Telefono de la Persona de la agencia")
    ciudadAgencia = models.CharField(max_length=100, help_text="Ingrese la Ciudad de la persona de la agencia")

    def __str__(self):
        return self.nombreAgencia

    class Meta:
        verbose_name = "agencia"
        verbose_name_plural = "agencias"

class Reserva(models.Model):
    cedulaReserva = models.CharField(max_length=10, help_text="Ingrese la Cedula")
    nitavReserva = models.CharField(max_length=100, help_text="Ingrese el Nit de la agencia de viaje")
    fechaingresoReserva = models.DateField()
    fechasalidaReserva  = models.DateField()
    horaingresoReserva = models.CharField(max_length=12, help_text="Ingrese la Hora de ingreso")
    personas = models.ForeignKey(Persona,null=True,blank=True,on_delete=models.CASCADE)
    agencia = models.ForeignKey(Agencia,null=True,blank=True,on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hoteles,blank=False,null=False,on_delete=models.CASCADE)


    def __str__(self):
        return self.personas.nombrePersona

    class Meta:
        verbose_name = "reserva"
        verbose_name_plural = "reservas"



