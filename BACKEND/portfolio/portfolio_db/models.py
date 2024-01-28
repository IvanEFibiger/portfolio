from django.db import models

class Proyecto(models.Model):
    titulo = models.CharField(max_length=200)
    introduccion = models.CharField(max_length=250)
    descripcion = models.TextField()
    imagen = models.ImageField(upload_to="Proyectos")
    link = models.URLField()
    creacion = models.DateTimeField(auto_now_add=True)
    modificacion= models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name= "Proyecto"
        verbose_name_plural = "Proyectos"
        ordering = ["-creacion"]


    def __str__(self):
        return self.titulo