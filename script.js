// ==================================================
// ELEMENTOS
// ==================================================

const btnAbrir = document.getElementById("btnAbrir");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const ramo = document.getElementById("ramo");
const contenedorPetalos = document.getElementById("petalos");
const contenedorEstrellas = document.getElementById("estrellas");


// ==================================================
// BOTÓN DE INICIO
// ==================================================

btnAbrir.addEventListener("click", () => {
    inicio.style.opacity = "0";

    setTimeout(() => {
        inicio.style.display = "none";
        contenido.classList.remove("oculto");

        crearEstrellas();
        crearCorazon();
        iniciarPetalos();
    }, 900);
});


// ==================================================
// CREAR PEONÍA
// ==================================================

function crearPeonia(x, y, retraso, escala = 1) {
    const flor = document.createElement("div");
    flor.classList.add("flor");

    flor.style.left = x + "%";
    flor.style.top = y + "%";
    flor.style.animationDelay = retraso + "s";
    flor.style.setProperty("--escala", escala);

    const cabeza = document.createElement("div");
    cabeza.classList.add("cabeza-flor");

    // pétalos exteriores
    for (let i = 0; i < 12; i++) {
        const petalo = document.createElement("div");
        petalo.classList.add("petalo-exterior");
        petalo.style.transform = `
            translate(-50%, -50%)
            rotate(${i * 30}deg)
            translateY(-15px)
        `;
        cabeza.appendChild(petalo);
    }

    // pétalos medios
    for (let i = 0; i < 10; i++) {
        const petalo = document.createElement("div");
        petalo.classList.add("petalo-medio");
        petalo.style.transform = `
            translate(-50%, -50%)
            rotate(${i * 36}deg)
            translateY(-9px)
        `;
        cabeza.appendChild(petalo);
    }

    // pétalos interiores
    for (let i = 0; i < 8; i++) {
        const petalo = document.createElement("div");
        petalo.classList.add("petalo-interior");
        petalo.style.transform = `
            translate(-50%, -50%)
            rotate(${i * 45}deg)
            translateY(-4px)
        `;
        cabeza.appendChild(petalo);
    }

    // centro
    const centro = document.createElement("div");
    centro.classList.add("centro-flor");

    cabeza.appendChild(centro);
    flor.appendChild(cabeza);
    ramo.appendChild(flor);
}


// ==================================================
// CREAR CORAZÓN
// ==================================================

function crearCorazon() {

    ramo.innerHTML = "";

    const flores = [

        // ==========================================
        // V INTERIOR SUPERIOR
        // Esta flor forma la punta interior del corazón
        // ==========================================

        {
            x: 50,
            y: 31,
            escala: 0.68
        },


        // ==========================================
        // SUBIENDO HACIA EL LÓBULO DERECHO
        // ==========================================

        {
            x: 55,
            y: 17,
            escala: 0.74
        },

        {
            x: 65,
            y: 8,
            escala: 0.76
        },

        {
            x: 77,
            y: 9,
            escala: 0.76
        },

        {
            x: 86,
            y: 18,
            escala: 0.76
        },


        // ==========================================
        // LADO DERECHO
        // ==========================================

        {
            x: 90,
            y: 30,
            escala: 0.76
        },

        {
            x: 88,
            y: 43,
            escala: 0.76
        },

        {
            x: 81,
            y: 54,
            escala: 0.76
        },

        {
            x: 73,
            y: 64,
            escala: 0.76
        },

        {
            x: 64,
            y: 73,
            escala: 0.76
        },

        {
            x: 55,
            y: 83,
            escala: 0.76
        },


        // ==========================================
        // PUNTA INFERIOR
        // ==========================================

        {
            x: 50,
            y: 95,
            escala: 0.82
        },


        // ==========================================
        // SUBIENDO POR EL LADO IZQUIERDO
        // ==========================================

        {
            x: 45,
            y: 83,
            escala: 0.76
        },

        {
            x: 36,
            y: 73,
            escala: 0.76
        },

        {
            x: 27,
            y: 64,
            escala: 0.76
        },

        {
            x: 19,
            y: 54,
            escala: 0.76
        },

        {
            x: 12,
            y: 43,
            escala: 0.76
        },

        {
            x: 10,
            y: 30,
            escala: 0.76
        },


        // ==========================================
        // LÓBULO SUPERIOR IZQUIERDO
        // ==========================================

        {
            x: 14,
            y: 18,
            escala: 0.76
        },

        {
            x: 23,
            y: 9,
            escala: 0.76
        },

        {
            x: 35,
            y: 8,
            escala: 0.76
        },

        {
            x: 45,
            y: 17,
            escala: 0.74
        }

    ];


    flores.forEach((flor, indice) => {

        crearPeonia(
            flor.x,
            flor.y,
            indice * 0.07,
            flor.escala
        );

    });

}


// ==================================================
// PÉTALO CAYENDO
// ==================================================

function crearPetalo() {
    const petalo = document.createElement("div");
    petalo.classList.add("petalo-caida");

    petalo.style.left = Math.random() * 100 + "vw";

    const escala = 0.7 + Math.random() * 0.6;
    petalo.style.scale = escala;

    petalo.style.animationDuration = 6 + Math.random() * 5 + "s";

    contenedorPetalos.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 12000);
}


// ==================================================
// LLUVIA DE PÉTALOS
// ==================================================

function iniciarPetalos() {
    for (let i = 0; i < 5; i++) {
        setTimeout(crearPetalo, i * 300);
    }

    setInterval(() => {
        crearPetalo();
    }, 800);
}


// ==================================================
// ESTRELLAS
// ==================================================

function crearEstrellas() {
    if (!contenedorEstrellas) return;

    for (let i = 0; i < 30; i++) {
        const estrella = document.createElement("div");
        estrella.classList.add("estrella");

        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";
        estrella.style.animationDelay = Math.random() * 3 + "s";

        contenedorEstrellas.appendChild(estrella);
    }
}