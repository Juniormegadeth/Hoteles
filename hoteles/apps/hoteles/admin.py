from django.contrib import admin
from apps.hoteles.models import *
# Register your models here.

class MembershipInline(admin.TabularInline):
    model = Hoteles
    extra = 1

class HotelesAdmin(admin.ModelAdmin):
    inline = (MembershipInline, )
    list_display = ()
    search_fields = () #Campo relacionado
    list_filter = ()

admin.site.register(Hoteles)
admin.site.register(Categoria)
admin.site.register(TipoHabitacion)

