let intervaloAutoReproduccion = null; // Para guardar el ID del intervalo y poder pararlo
const TIEMPO_ESPERA = 7000; // 7 segundos entre preguntas. Podés ajustar este valor.

// Función para avanzar a la siguiente pregunta de forma automática
function avanzarPreguntaAutomaticamente() {
    // Chequeamos si ya hay una animación en curso para no superponerlas
    if (isAnimating) {
        return; // Si está animando, no hacemos nada y esperamos al próximo intervalo
    }

    // Si estamos en la última pregunta, volvemos a la primera (como hace la flecha derecha)
    if (preguntaActual === totalPreguntas) {
        preguntaActual = 1;
    } else {
        preguntaActual++;
    }
    mostrarPregunta();
}

// Función para iniciar la reproducción automática
function iniciarAutoReproduccion() {
    // Si ya hay un intervalo corriendo, no hacemos nada para evitar duplicados
    if (intervaloAutoReproduccion) return;

    console.log("Iniciando reproducción automática...");
    // Creamos un intervalo que llama a la función de avanzar cada X segundos
    intervaloAutoReproduccion = setInterval(avanzarPreguntaAutomaticamente, TIEMPO_ESPERA);
}

// Función para detener la reproducción automática
function detenerAutoReproduccion() {
    // Si hay un intervalo, lo limpiamos con clearInterval
    if (intervaloAutoReproduccion) {
        clearInterval(intervaloAutoReproduccion);
        intervaloAutoReproduccion = null; // Reseteamos la variable para saber que está parado
        console.log("Reproducción automática detenida.");
    }
}

// El listener para el switch. Se fija si está tildado o no.
document.getElementById("auto-switch").addEventListener("change", function () {
    if (this.checked) {
        iniciarAutoReproduccion();
    } else { 
        detenerAutoReproduccion();
    }
});


