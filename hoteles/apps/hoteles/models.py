from django.db import models

# Create your models here.

class Categoria(models.Model):
    nombre = models.CharField(max_length=50, verbose_name="(Que Nivel)", help_text=" (1 - 5) estrellas"  )
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "tipo categoria"
        verbose_name_plural = "tipo categorias"

class TipoHabitacion(models.Model):
    nombre = models.CharField(max_length=50, verbose_name="(Escoja una de las 3)", help_text="Suites, Dobles, Individuales"  )
    def __str__(self):
        return self.nombre
    class Meta:
        verbose_name = "tipo habitacion"
        verbose_name_plural = "tipo habitaciones"

class Hoteles(models.Model):
    nombreHoteles = models.CharField(max_length=100, help_text="Ingrese el Nombre del Hotel")
    direccionHoteles = models.CharField(max_length=100, help_text="Ingrese la Direccion del Hotel")
    telefonoHoteles = models.CharField(max_length=12, help_text="Ingrese el Telefono del Hotel")
    año = models.CharField(max_length=100, help_text="Ingrese el año de construcion del Hotel")
    tipocategoria = models.ForeignKey(Categoria,null=True,blank=True,on_delete=models.CASCADE)
    tipohabitacion = models.ForeignKey(TipoHabitacion,null=True,blank=True,on_delete=models.CASCADE)
    def __str__(self):
        return self.nombreHoteles
    class Meta:
        verbose_name = "hotel"
        verbose_name_plural = "hoteles"
