/* =====================================================
   EL PAPÁ SEÑOR
   FUNCIONES DE LA PÁGINA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("videoPapaSenor");

    /*
        Cuando el usuario reproduce el video,
        guardamos que ya comenzó a verlo.
    */

    if (video) {

        video.addEventListener("play", () => {
            document.body.classList.add("video-reproduciendo");
        });

        video.addEventListener("pause", () => {
            document.body.classList.remove("video-reproduciendo");
        });

        video.addEventListener("ended", () => {
            document.body.classList.remove("video-reproduciendo");
        });
    }


    /*
        Animación sencilla para los elementos
        cuando aparecen al entrar en pantalla.
    */

    const elementos = document.querySelectorAll(
        ".tarjeta, .importancia-contenido, .estado-contenido"
    );

    const observador = new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";
                    entrada.target.style.transform = "translateY(0)";

                    observador.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elementos.forEach((elemento) => {

        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(20px)";
        elemento.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observador.observe(elemento);

    });

});