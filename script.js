const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches("solapa-derecha") ||
        e.target.matches("solapa-izquierda") ||
        e.target.matches ("corazon")) {
        envoltura.classList.toggle("abierto");

        if (!carta.classList.contains("abierta")) {
            setInterval(() => {
                carta.classList.add("mostrar-carta");

                setInterval(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envoltura-sobre *")) {
        envoltura.classList.remove("abierto");
       
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrando-carta");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta");
                carta.classList.remove("abierta")
            }, 500);
        }
    }
})

window.addEventListener("click", () => {
  const musica = document.getElementById("musica");
  musica.play();
}, { once: true });

const sobre = document.querySelector(".sobre");
const musica = document.getElementById("musica");

musica.volume = 0.3;

sobre.addEventListener("click", () => {
  musica.play();
});
