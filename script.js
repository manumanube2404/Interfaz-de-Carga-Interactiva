const titulo = document.querySelector('.reproductor-musica h1');
const parrafo = document.querySelector('.reproductor-musica p');

const volumen = document.getElementById('barra-volumen');
const cancion = document.getElementById('cancion');

const btn_atras = document.querySelector('.atras');
const btn_siguiente = document.querySelector('.siguiente');

const btn_mute = document.querySelector('.mute-unmute');
const iconoMute=document.getElementById('iconoMute');

const iconoPausa=document.getElementById('iconoPausa');

const canciones = [

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
    titulo.textContent = canciones[CancionActual].titulo;
    cancion.src = canciones[CancionActual].ruta;
    cancion.addEventListener('loadeddata', function () { });
    reproducirCancion();
}

function mute() {
    if (cancion.muted == false) {
        cancion.muted = true;
        iconoMute.classList.add('bi-volume-mute-fill');
        iconoMute.classList.remove('bi-volume-up-fill');
    } else {
        iconoMute.classList.remove('bi-volume-mute-fill');
        iconoMute.classList.add('bi-volume-up-fill');
        cancion.muted = false;
    }
}

function pausar() {
    if (cancion.paused) {
        reproducirCancion();
        iconoPausa.classList.add('bi-pause-fill');
        iconoPausa.classList.remove('bi-play-fill');
    }else{
        iconoPausa.classList.remove('bi-pause-fill');
        iconoPausa.classList.add('bi-play-fill');
        pausarCancion();
    }
}


function reproducirCancion() {
    cancion.play();

}

function pausarCancion(){
    cancion.pause();
}

function cambiarCancion(num){
    if(num==0){
        CancionActual-=1
        if(CancionActual<0){
            CancionActual=canciones.length-1
        }
    }else{
        CancionActual+=1
        if(CancionActual>=canciones.length){
            CancionActual=0
        }
    }
    actualizar();

}


actualizar();