const preguntasYRespuestas = [
    {
        pregunta: '¿En qué consiste el proyecto web "Microemprendedores Colón"?',
        respuesta: 'Es una iniciativa que busca crear una plataforma web para conectar a microemprendedores de Colón, para empezar, con la comunidad local, turistas y entre ellos mismos tambien. El objetivo es promover sus productos y servicios, facilitando el acceso a información sobre los emprendedores y sus ofertas.'
    },
    {
        pregunta: '¿Qué tipo de emprendedores pueden formar parte de esta guía?',
        respuesta: 'Cualquier microemprendedor de Colón que ofrezca productos o servicios. Esto incluye desde artesanos, productores locales, hasta pequeños negocios familiares.'
    },
    {
        pregunta: '¿Qué pasos debe seguir un emprendedor para registrarse?',
        respuesta: 'Los emprendedores interesados deben completar un formulario de registro en la web, proporcionando información básica sobre su negocio, productos o servicios, y datos de contacto. Una vez revisada y aprobada la información, serán incluidos en la guía.'
    },
    {
        pregunta: '¿Qué beneficios obtiene un emprendedor al aparecer en la guía?',
        respuesta: 'Al aparecer en la guía, los emprendedores obtienen mayor visibilidad y promoción de sus productos o servicios. Esto puede ayudarles a atraer más clientes, tanto locales como turistas, y fomentar el apoyo a la economía local.'
    },
    {
        pregunta: '¿Cuál es el valor social y comunitario de este proyecto?',
        respuesta: 'El proyecto busca fortalecer la comunidad local al promover el consumo de productos y servicios locales, fomentar la colaboración entre emprendedores y crear un sentido de pertenencia. Además, contribuye a la sostenibilidad económica de la región al apoyar a los microemprendedores.'
    },
    {
        pregunta: '¿Qué funciones debería tener la web en una primera versión?',
        respuesta: 'La web debería permitir a los emprendedores registrarse, crear un perfil con información sobre su negocio, productos o servicios, y datos de contacto. También debería incluir un buscador para que los usuarios puedan encontrar emprendedores por categoría o ubicación, y una sección de noticias o eventos relacionados con la comunidad.'
    },
    {
        pregunta: '¿Cómo se podría mejorar y ampliar el proyecto en el futuro?',
        respuesta: 'Podría mejorarse añadiendo funciones como un sistema de reseñas y valoraciones, integración con redes sociales, un calendario de eventos locales, y una sección de recursos para emprendedores. También se podría considerar la posibilidad de incluir una tienda en línea para facilitar las ventas.'
    },
    {
        pregunta: '¿Qué rol cumple el municipio y por qué es importante su participación?',
        respuesta: ' El municipio juega un rol clave al apoyar y promover el proyecto, ya que puede proporcionar recursos, visibilidad y credibilidad. Su participación es importante para garantizar que la plataforma sea reconocida y utilizada por la comunidad, y para fomentar un entorno favorable para los emprendedores locales.'
    },
    {
        pregunta: '¿Qué aprendés vos como estudiante al participar en este proyecto?',
        respuesta: ' Como estudiante, aprendo sobre el trabajo en equipo, la importancia de la colaboración comunitaria, y cómo un proyecto puede tener un impacto positivo en la sociedad. También adquiero habilidades prácticas en desarrollo web, gestión de proyectos y comunicación.'
    },
    {
        pregunta: '¿Creés que este proyecto podría tener impacto en otras ciudades? ¿Por qué?',
        respuesta: ' Sí, podría tenerlo, ya que muchas comunidades enfrentan desafíos similares en cuanto a la promoción de sus microemprendedores. La idea de crear una plataforma para conectar a emprendedores con la comunidad es replicable y puede adaptarse a diferentes contextos locales.'
    },
    {
        pregunta: '¿Cómo se puede asegurar que la información de los emprendedores sea confiable y esté actualizada?',
        respuesta: 'Para asegurar la confiabilidad y actualización de la información, se podría implementar un proceso de verificación al momento del registro, donde se revisen los datos proporcionados. Además, se podría establecer un sistema de actualización periódica donde los emprendedores sean contactados para confirmar que su información sigue siendo válida. '
    },
    {
        pregunta: '¿Qué estrategias se pueden usar para difundir la web una vez publicada?',
        respuesta: ' Para difundir la web, se pueden utilizar redes sociales, campañas de email marketing, colaboraciones con influencers locales, y eventos comunitarios. También se podría considerar la creación de material promocional impreso, como folletos o carteles, que se distribuyan en lugares estratégicos de la ciudad.'
    },
    {
        pregunta: '¿Qué elementos de diseño visual serían importantes para que la web sea atractiva y fácil de usar?',
        respuesta: 'Es importante que la web tenga un diseño limpio y moderno, con una paleta de colores que refleje la identidad local. La navegación debe ser intuitiva, con menús claros y accesibles. También sería útil incluir imágenes de alta calidad de los productos o servicios ofrecidos por los emprendedores, así como testimonios o historias que conecten emocionalmente con los usuarios.'
    },
    {
        pregunta: '¿Qué herramientas o lenguajes de programación se podrían usar para desarrollar esta web?',
        respuesta: '  Para desarrollar la web, se podrían utilizar herramientas como HTML, CSS y JavaScript para el front-end. Para el back-end, se podría considerar el uso de JavaScript (con Node.js) o C# con .net core. También sería útil utilizar bases de datos como SQL Server para almacenar la información de los emprendedores.'
    },
    {
        pregunta: '¿Qué desafíos o dificultades podría tener este proyecto y cómo se podrían resolver?',
        respuesta: ' Algunos desafíos podrían incluir la falta de participación de los emprendedores, la necesidad de financiamiento para el desarrollo y mantenimiento de la web, y la promoción efectiva del proyecto. Para resolver estos problemas, se podría trabajar en campañas de sensibilización para involucrar a los emprendedores, buscar patrocinadores o subvenciones, y establecer un plan de marketing sólido para difundir la web.'
    },
    {
        pregunta: '¿Cómo se puede medir el éxito del proyecto y su impacto en la comunidad?',
        respuesta: 'El éxito del proyecto se puede medir a través de métricas como el número de emprendedores registrados, la cantidad de visitas a la web, y el feedback recibido de los usuarios. También se pueden realizar encuestas para evaluar el impacto en la comunidad, como el aumento en las ventas de los emprendedores o la percepción general del proyecto.'
    },
    {
        pregunta: '¿Qué tipo de soporte o asistencia se ofrecerá a los emprendedores que utilicen la web?',
        respuesta: 'Se ofrecerá soporte técnico a través de un sistema de tickets o correo electrónico, donde los emprendedores puedan plantear sus dudas o problemas. También se podría considerar la creación de una sección de preguntas frecuentes (FAQ) en la web, y la posibilidad de realizar talleres o capacitaciones para ayudar a los emprendedores a aprovechar al máximo la plataforma.'
    },
    {
        pregunta: ' ¿Cómo se puede garantizar la sostenibilidad del proyecto a largo plazo?',
        respuesta: 'Se podría considerar la implementación de un modelo de financiamiento que incluya donaciones, patrocinios de empresas locales, o incluso una pequeña cuota de membresía para los emprendedores. También es importante establecer un plan de mantenimiento y actualización de la web, así como un equipo dedicado a la gestión del proyecto.'
    },
    {
        pregunta: '¿Cómo se puede fomentar la participación de la comunidad en el proyecto?',
        respuesta: 'Se pueden asistir a los eventos locales, como ferias o mercados, donde los emprendedores puedan exhibir estos servicios. También se pueden crear campañas en redes sociales para involucrar a la comunidad, animándola a compartir sus experiencias y apoyar a los emprendedores locales.'
    }, 
    {
        pregunta: '¿De qué manera se pueden involucrar a los emprendedores en el mantenimiento y actualización de la web?',
        respuesta: 'Se podría crear un comité de emprendedores que participe en la toma de decisiones sobre la web, incluyendo sugerencias para mejoras y actualizaciones. Además, se podría establecer un sistema de retroalimentación donde los emprendedores puedan enviar sus comentarios y sugerencias de manera regular.'
    },
    { 
      pregunta: ' ¿Qué tipo de contenido adicional podría incluirse en la web para enriquecer la experiencia del usuario?',   
        respuesta: 'Se podría incluir un blog con artículos sobre temas relevantes para los emprendedores, como marketing digital, gestión de negocios, o historias de éxito. También se podrían añadir recursos descargables, como guías o plantillas, y una sección de noticias sobre eventos locales o iniciativas comunitarias.'
    },
    { 
      pregunta: '¿Cómo se puede fomentar la colaboración entre los emprendedores a través de la web?',
        respuesta: 'Se pueden crear foros o grupos de discusión donde los emprendedores puedan compartir experiencias, consejos y recursos. También se podrían organizar eventos virtuales, como webinars o talleres, donde los emprendedores puedan aprender unos de otros y colaborar en proyectos conjuntos.'
    }
];  



      var preguntaActual = 1;
      var totalPreguntas = preguntasYRespuestas.length; // Lo calculamos solo para no pifiarle
      var isAnimating = false; // Para no romper todo si aprietan la flecha muy rápido

      var izquierda = document.getElementById('flecha-izquierda');
      var derecha = document.getElementById('flecha-derecha');

        izquierda.addEventListener('click', () => {
          if (preguntaActual > 1 && !isAnimating) {
            preguntaActual--;
            mostrarPregunta();
          }
        });
        derecha.addEventListener('click', () => {
          if (preguntaActual < totalPreguntas && !isAnimating) {
            preguntaActual++;
            mostrarPregunta();
          }else if (preguntaActual === totalPreguntas) {   // Si es la última pregunta, volvemos a la primera
            preguntaActual = 1;
            mostrarPregunta();
          }
        });


        async function mostrarPregunta() {
          isAnimating = true;
          const preguntaData = preguntasYRespuestas[preguntaActual - 1];
          const preguntaElement = document.getElementById('texto-pregunta');
          const respuestaElement = document.getElementById('text-content');
          
          // Hacemos que los textos viejos se vayan con una animación (en paralelo para más fluidez)
          await Promise.all([
            animateCSS('#texto-pregunta', 'fadeOutLeft'),
            animateCSS('#text-content', 'fadeOut')
          ]);
          
          // Ocultamos los elementos para evitar el "flash" del contenido viejo
          preguntaElement.style.visibility = 'hidden';
          respuestaElement.style.visibility = 'hidden';

          // Cambiamos el contenido MIENTRAS están ocultos
          preguntaElement.textContent = preguntaData.pregunta;
          respuestaElement.innerHTML = `<p>${preguntaData.respuesta.replace(/\n/g, '</p><p>')}</p>`;
          
          await animateCSS('#text-content', 'fadeIn');
          // Los volvemos a hacer visibles y hacemos que el texto nuevo aparezca con otra animación
          preguntaElement.style.visibility = 'visible';
          respuestaElement.style.visibility = 'visible';
          await animateCSS('#texto-pregunta', 'fadeInRight');
          

          isAnimating = false;
        }

       // Inicializar la primera pregunta al cargar la página
       document.addEventListener('DOMContentLoaded', function() {
          mostrarPregunta();
        });



 const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });


  // Llenar la lista desplegable con las preguntas
const listaPreguntas = document.getElementById('lista-preguntas');
for (let i = 1; i <= totalPreguntas; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text =` ${i}) ${preguntasYRespuestas[i - 1].pregunta}` ; // Podés poner el texto de la pregunta si querés
  listaPreguntas.appendChild(option);
}

// Manejar la selección de la lista desplegable
listaPreguntas.addEventListener('change', function() {
  preguntaActual = parseInt(this.value);
  mostrarPregunta();
});