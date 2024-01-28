
// Función carrousel imagenes
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


// Función botones about-me
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


// Función para copiar contenido de boton email
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
//Mostrar alerta de copiado
function mostrarAlerta(mensaje) {
    var alerta = document.getElementById('miAlerta');
    alerta.innerText = mensaje;
    alerta.style.display = 'block';

    
    setTimeout(function() {
        alerta.style.display = 'none';
    }, 3000);
}
//Función para botones linkedin y github
function irALinkedIn() {
    window.open("https://www.linkedin.com/in/ivan-fibiger/", target="_blank");
}

function irAGithub() {
    window.open("https://github.com/IvanEFibiger", target="_blank");
}

