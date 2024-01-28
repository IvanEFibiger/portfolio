from django.contrib import admin

from .models import Proyecto
class ProyectoAdmin(admin.ModelAdmin):
    readonly_fields = ("creacion", "modificacion")


admin.site.register(Proyecto, ProyectoAdmin)