

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleAutoplaying'), {
        interval: 2000, 
        wrap: true,
        keyboard: true
    });
});

// Función para cargar el texto letra por letra
function cargarTextoCarrusel(elementoId) {
    var elemento = document.getElementById(elementoId);
    var textoCompleto = elemento.textContent;
    var tiempoEntreReinicios = 500; 

    function animarTexto(i) {
        setTimeout(function () {
            elemento.innerHTML = textoCompleto.substring(0, i + 1);

            if (i < textoCompleto.length - 1) {
                animarTexto(i + 1);
            } else {
                
                setTimeout(function () {
                    animarTexto(0);
                }, 500);
            }
        }, 100);
    }

    animarTexto(0);
}


cargarTextoCarrusel("subtitulo_principal");



function verMas() {
    document.getElementById("contenidoOculto").style.display = "block";
    document.getElementById("btnVerMas").style.display = "none";
    document.getElementById("btnVerMenos").style.display = "inline";
}

function verMenos() {
    document.getElementById("contenidoOculto").style.display = "none";
    document.getElementById("btnVerMenos").style.display = "none";
    document
    .getElementById("btnVerMas").style.display = "inline";
}



document.getElementById('mail').addEventListener('click', function() {
    
    var textoBoton = this.innerText;

  
    var tempTextarea = document.createElement('textarea');
    
   
    tempTextarea.value = textoBoton;

    
    document.body.appendChild(tempTextarea);

    
    tempTextarea.select();

    try {
       
        document.execCommand('copy');
        
        
        mostrarAlerta('Texto copiado al portapapeles: ' + textoBoton);
    } catch (err) {
        console.error('No se pudo copiar el texto: ', err);
    } finally {
   
        document.body.removeChild(tempTextarea);
    }
});

function mostrarAlerta(mensaje) {
    var alerta = document.getElementById('miAlerta');
    alerta.innerText = mensaje;
    alerta.style.display = 'block';

    
    setTimeout(function() {
        alerta.style.display = 'none';
    }, 3000);
}

function irALinkedIn() {
    window.location.href = "https://www.linkedin.com/in/ivan-fibiger/";
}

function irAGithub() {
    window.location.href = "https://github.com/IvanEFibiger"
}


function descargarCV() {

    var url = 'varios/CV_ivan_fibiger.pdf'; 


    var enlace = document.createElement('a');

 
    enlace.href = url;


    enlace.download = 'Ivan Fibiger CV.pdf';

 
    document.body.appendChild(enlace);

    
    enlace.click();

  
    document.body.removeChild(enlace);
}