const preguntas = document.querySelectorAll(".faq-question");

preguntas.forEach((pregunta)=>{

    pregunta.addEventListener("click",()=>{

        const respuesta = pregunta.nextElementSibling;

        if(respuesta.style.display==="block"){

            respuesta.style.display="none";

        }else{

            respuesta.style.display="block";

        }

    });

});
// ==============================
// CONTADORES ANIMADOS
// ==============================

const contadores = document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const objetivo = Number(contador.dataset.numero);

    let actual = 0;

    const velocidad = Math.max(1, Math.ceil(objetivo / 80));

    function actualizar() {

        actual += velocidad;

        if (actual >= objetivo) {

            contador.textContent = objetivo;

        } else {

            contador.textContent = actual;
            requestAnimationFrame(actualizar);

        }

    }

    actualizar();

});
console.log("JavaScript funcionando");