from django.contrib import admin
from apps.personas.models import *

# Register your models here.

admin.site.register(Persona)
admin.site.register(Agencia)
admin.site.register(Reserva)