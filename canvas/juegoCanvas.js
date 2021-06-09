var canvas = document.getElementById("canvas");
var mapa = canvas.getContext("2d");


/********************
 * Objetos
 ********************/

var fondo = {
    url : "img/fondo.png",
    imagenOK : false,
}

var diana = {
    ulrFrente : "img/diana-frente.png",
    frenteOK : false,

    ulrAtras : "img/diana-atras.png",
    atrasOK : false,

    ulrDerecha : "img/diana-der.png",
    izquierdaOK : false,

    ulrIzquierda : "img/diana-izq.png",
    derechaOK : false,

    velocidad : 8,

    x : Math.floor( Math.random() * (400 - 0 +1) + 0 ),
    y : Math.floor( Math.random() * (400 - 0 +1) + 0 ),
}

var liz = {
    lizOK : false,
    url : "img/liz.png",
    x : 400,
    y : 10,
} 

var teclas = {
    UP : 38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39,
}



//Liz
liz.imagenLiz = new Image();
liz.imagenLiz.src = liz.url;

//Diana de frente
diana.imagenFrente = new Image();
diana.imagenFrente.src = diana.ulrFrente;

//Diana de atras
diana.imagenAtras = new Image();
diana.imagenAtras.src = diana.ulrAtras;

//Diana de derecha
diana.imagenDerecha = new Image();
diana.imagenDerecha.src = diana.ulrDerecha;

//Diana de izquierda
diana.imagenIzquierda = new Image();
diana.imagenIzquierda.src = diana.ulrIzquierda;


//Fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.onload = function(){dibujar(diana.imagenFrente)};

/*****************
 * Funciones
 *****************/

function dibujar(perfilDiana){
    
    fondo.imagenOK = true;
    if(fondo.imagenOK == true){
        mapa.drawImage(fondo.imagen,0,0);
    }
    
    liz.lizOK = true;
    if(liz.lizOK == true ){
        mapa.drawImage(liz.imagenLiz,liz.x,liz.y)
    }

    diana.frenteOK = true;
    if(diana.frenteOK == true){
        mapa.drawImage(perfilDiana,diana.x,diana.y)
    }
}

//Movimientos de Diana

function moverDerecha(){

    if( diana.x <= 456 ){ 
        diana.x += diana.velocidad;
        dibujar(diana.imagenDerecha);
        console.log("Derecha");
    }
}

function moverIzquierda(){

    if(diana.x >= -8){
        diana.x -= diana.velocidad;
        dibujar(diana.imagenIzquierda);
        console.log("Izquierda");
    }
}

function moverArriba(){

    if(diana.y > 4){
        diana.y -= diana.velocidad;
        dibujar(diana.imagenAtras);
        console.log("Arriba");
    }
}

function moverAbajo(){

    if( diana.y < 446){
        diana.y += diana.velocidad;
        dibujar(diana.imagenFrente);
        console.log("Abajo");
    }
}

//Movimientos de Diana Con Teclas

function moverDianaConTeclas(codigo){

    let teclaOprimida = codigo.keyCode; 
    
    switch(teclaOprimida){

        case (teclas.UP):
            moverArriba();
            console.log("Arriba " + codigo.keyCode);
        break;

        case(teclas.DOWN):
            moverAbajo() ;
            console.log("Abajo " + codigo.keyCode);
        break;
        
        case(teclas.LEFT):
            moverIzquierda() ;
            console.log("Izquierda " + codigo.keyCode);
        break;
        
        case(teclas.RIGHT):
            moverDerecha();
            console.log("derecha " + codigo.keyCode);
        break;

        default:
        console.log("Diana solo se mueve con las flechas :(");
    }    
}

/************
 * Eventos
 ************/

 var movimientoDerecha = document.getElementById("movimientoDerecha");
 movimientoDerecha.addEventListener('click', moverDerecha);
 
 var movimientoIzquierda = document.getElementById("movimientoIzquierda");
 movimientoIzquierda.addEventListener('click', moverIzquierda);
 
 var movimientoArriba = document.getElementById("movimientoArriba");
 movimientoArriba.addEventListener('click', moverArriba);
 
 var movimientoAbajo = document.getElementById("movimientoAbajo");
 movimientoAbajo.addEventListener('click', moverAbajo);

 document.addEventListener('keydown', moverDianaConTeclas);
