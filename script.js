const titulo = document.querySelector('.reproductor-musica h1');
const texto_dinamico = document.querySelector('.reproductor-musica p');

const volumen = document.getElementById('barra-volumen');
const cancion = document.getElementById('cancion');

const btn_atras = document.querySelector('.atras');
const btn_siguiente = document.querySelector('.siguiente');

const btn_mute = document.querySelector('.mute-unmute');
const iconoMute = document.getElementById('iconoMute');

const iconoPausa = document.getElementById('iconoPausa');

let estadosCarga = [ //array de texto dinamico
    "JOINING SERVER",
    "PREPARING ASSETS",
    "ESTABLISHING CONNECTION"
];

let estadoActual = 0;

setInterval(() => {
    texto_dinamico.textContent = estadosCarga[estadoActual]; //cambia el texto actual, por uno de la array 
    estadoActual = (estadoActual + 1) % estadosCarga.length; //le suma uno al contador
}, 2000); //cada 2seg = 2000 miliseg

volumen.addEventListener('input', () => {
    cancion.volume = volumen.value; //cambia el volumen de la cancion
    if (cancion.muted == true) {
        cancion.muted = false;
    }
    if (cancion.volume == 0) {
        iconoMute.classList.add('bi-volume-mute-fill'); //añade la clase bi-volume-mute-fill al elemento con id: iconoMute
        iconoMute.classList.remove('bi-volume-up-fill'); //elimina la clase bi-volume-up-fill al elemento con id: iconoMute
    } else {
        iconoMute.classList.remove('bi-volume-mute-fill');
        iconoMute.classList.add('bi-volume-up-fill');
    }
});

const canciones = [ //array con nombres y rutas de las canciones

    {
        titulo: 'The Spectacular Spider-Man',
        ruta: 'musica/The Spectacular Spider-Man.mp3'
    },
    {
        titulo: 'Codigo Lyoko',
        ruta: 'musica/Code Lyoko - Full.mp3'
    },
    {
        titulo: 'Arriba, Chuta',
        ruta: 'musica/Spanish 01. Arriba, Chuta.mp3'
    },
    {
        titulo: 'Cancion Random',
        ruta: 'musica/cancion1.mp3',
    }
];

let CancionActual = 0

function actualizar() {
    titulo.textContent = canciones[CancionActual].titulo; //cambia el titulo de la cancion
    cancion.src = canciones[CancionActual].ruta; //reproduce la cancion
    pausar();
}

function mute() {
    if (cancion.muted == false) {
        cancion.muted = true; //mutea la cancion
        iconoMute.classList.add('bi-volume-mute-fill');
        iconoMute.classList.remove('bi-volume-up-fill');
    } else {
        iconoMute.classList.remove('bi-volume-mute-fill');
        iconoMute.classList.add('bi-volume-up-fill');
        cancion.muted = false; //desmutea la cancion
    }
}

function pausar() {
    if (cancion.paused) {
        reproducirCancion();
        iconoPausa.classList.add('bi-pause-fill');
        iconoPausa.classList.remove('bi-play-fill');
    } else {
        iconoPausa.classList.remove('bi-pause-fill');
        iconoPausa.classList.add('bi-play-fill');
        pausarCancion();
    }
}


function reproducirCancion() { //reproduce la cancion
    cancion.play();

}

function pausarCancion() { //pausa la cancion
    cancion.pause();
}

function cambiarCancion(num) { //Cambia la cancion seleccionada
    if (num == 0) { //se elige la anterior cancion en la array
        CancionActual -= 1
        if (CancionActual < 0) {
            CancionActual = canciones.length - 1
        }
    } else { //se elige la siguiente cancion en la array
        CancionActual += 1
        if (CancionActual >= canciones.length) {
            CancionActual = 0
        }
    }
    actualizar();

}
 
document.addEventListener('keydown', (letras) => { //keydown , utiliza las letras del teclado 
    switch (letras.key) { //detecta las letras introducidas por teclado
        case "ArrowRight": // flecha derecha
            cambiarCancion(1);
            break;
        case "ArrowLeft": // flecha izquierda
            cambiarCancion(0);
            break;
        case "Enter": // enter para mutearse
            pausar();
            break;
        case " ":  // espacio
            mute();
            break;
    }
});



actualizar(); //hace que la cancion se active nada mas abrir la pagina
