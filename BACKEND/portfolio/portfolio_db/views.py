from django.shortcuts import render
from .models import Proyecto
from django.core.paginator import Paginator
from django.http import HttpResponse
from wsgiref.util import FileWrapper
import os

# vista para index
def index(request):
    proyectos = Proyecto.objects.all()
    paginator = Paginator(proyectos, 3) 
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)
    return render(request, "portfolio/index.html", {"page_obj": page_obj})

# vista para proyectos
def proyectos(request, pk):
    proyectos = Proyecto.objects.filter(pk=pk)
    return render(request, "portfolio/proyectos.html", {"proyectos": proyectos})

# vista para descargar cv
def download_pdf(request):
    filename = r'C:\Users\Ivan\Desktop\PROYECTO_PORTFOLIO\BACKEND\portfolio\core\static\core\varios\CV_ivan_fibiger.pdf' 
    content = FileWrapper(open(filename, 'rb'))
    response = HttpResponse(content, content_type='application/pdf')
    response['Content-Length'] = os.path.getsize(filename)
    response['Content-Disposition'] = 'attachment; filename=%s' % 'CV_ivan_fibiger.pdf'
    return response