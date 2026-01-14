const titulo=document.querySelector('.reproductor-musica h1');
const parrafo=document.querySelector('.reproductor-musica p');

const volumen=document.getElementById('barra-volumen');
const cancion=document.getElementById('cancion');

const btn_atras=document.querySelector('.atras');
const btn_siguiente=document.querySelector('.siguiente');

const btn_mute=document.querySelector('.mute-unmute');

const canciones=[
    
    {
        titulo:'The Spectacular Spider-Man',
        ruta: 'musica/The Spectacular Spider-Man.mp3'
    },
    {
        titulo:'Codigo Lyoko',
        ruta: 'musica/Code Lyoko - Full.mp3'
    },
    {
        titulo:'Arriba, Chuta',
        ruta: 'musica/Spanish 01. Arriba, Chuta.mp3'
    },
    {
        titulo:'Cancion Random',
        ruta: 'musica/cancion1.mp3',
    }
];

let CancionActual = 0

function actualizar(){
    titulo.textContent=canciones[CancionActual].titulo;
    cancion.src = canciones[CancionActual].ruta;
    cancion.addEventListener('loadeddata',function(){});
}

function pausar(){
    reproducirCancion();
}

function reproducirCancion(){
    cancion.play();

}

actualizar();