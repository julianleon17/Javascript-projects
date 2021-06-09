const canvas = document.getElementById("canvas");
const mapa = canvas.getContext("2d");


/*===========================================
 *               F U C T I O N S
 *===========================================*/

//dibujar lineas
function dibujarLinea(x_inicial,y_inicial,x_final,y_final,color,grosor){
    mapa.beginPath();
    mapa.lineWidth = grosor;
    mapa.strokeStyle = color
    mapa.moveTo(x_inicial,y_inicial);
    mapa.lineTo(x_final,y_final);
    mapa.closePath();
    mapa.stroke();
}

//Dibujar circulo
function dibujarCirculo(x,y,r,){
    mapa.beginPath();
    mapa.lineWidth = 5;
    mapa.strokeStyle = "black"
    mapa.arc(x,y,r,(Math.PI * 2),false);
    mapa.stroke();
    mapa.closePath();
}

//dibujar el poste
function dibujarPoste(){
    
    //Poste
    mapa.beginPath();
    mapa.lineWidth = 40;
    mapa.strokeStyle = "black"
    mapa.moveTo(140,50);
    mapa.lineTo(140,10);
    mapa.lineTo(350,10);
    mapa.lineTo(350,400);
    mapa.stroke();
    mapa.closePath();
    
    //Pasto
    dibujarLinea(0,400,400,400,"green",80)

    //Cuerda
    dibujarLinea(140,20,140,100,"black",2);
    
    /*grilla
    dibujarLinea(0,200,400,200,"blue")
    dibujarLinea(200,0,200,400,"blue")
    */
}

//Cabeza
function dibujarCabeza(){
    dibujarCirculo(120,100,20);
}

//Cuerpo
function dibujarCuerpo(){
    dibujarLinea(140,100,140,200,"black",6);
}

//Brazo Drerecho
function dibujarBrazoDerecho(){
    dibujarLinea(140,120,110,180);
}

//Brazo Izquierdo
function dibujarBrazoIzquierdo(){
    dibujarLinea(140,120,180,180);
}

//Pierna Derecha
function dibujarPiernaDerecha(){
    dibujarLinea(140,200,160,280);
}

//Pierna Izquierda
function dibujarPiernaIzquierda(){
    dibujarLinea(140,200,120,280);
}

/*=============================
 *  Funciones de los eventos
 *=============================*/

//Esta función solo me muestra la palabra en pantalla cuando se pierden todos los intentos
function mostrar_palabra_al_morir( palabra ){

    if( !(hombre.vivo) ){

        pista.innerText = palabra;
    }
}


function agregarPalabra( p, palabra, pista ){

    let posiblePalabra = p.value;
    posiblePalabra = posiblePalabra.toUpperCase();

    if( posiblePalabra == palabra ){

        pista.innerText = posiblePalabra;

        //El mesaje que avisa que se ganó 
        alert( "¡GANASTEEE!" );
        location.reload( location );
    }
    else{
        hombre.dibujar();
    }
    
    mostrar_palabra_al_morir( palabra );
}


function agregarLetra( l, palabra_armada, palabra, pista ){
    
    let letra = l.value;
    letra = letra.toUpperCase();
    
    let palabraEncontrada = false;
    
    palabraEncontrada = encontrar_letra( palabra_armada, letra, palabra, palabraEncontrada );

    mostrar_pista( palabra_armada, pista );
    
    //Si no encontró ninguna letra en la palabra quiere decir que es un intento menos por equivocarse
    if( palabraEncontrada != true ){
        hombre.dibujar();
    }


    let text = "";

    //Este ciclo me transforma el array con las palabras encontradas en texto para poder comparar la palabra
    for( i in palabra_armada ){

        text += palabra_armada[i];
    }

    //El mesaje que avisa que se ganó 
    if( text == palabra ){

        alert( "¡GANASTEEE!" );
        location.reload( location );
    }

    mostrar_palabra_al_morir( palabra );
}


function encontrar_letra( palabra_armada, letra, palabra, palabraEncontrada ){

    let largo = palabra_armada.length;
    let encontradas = 0;
    
    //El ciclo recorre letra por letra la palabra y compara la letra registrada con cada una de la palabra
    for( i=0; i < largo; i++ ){    

        if( letra == palabra[i] ){
            
            encontradas ++; //Acumula si encuentra la letra en la palabra
            palabra_armada[i] = letra;
        }
    }
    //console.log( encontradas + " Letras encontradas" );

    //Si el acumulador encontró mínimo una palabra entonces palabraEncontrada se vuelve verdad
    if( encontradas > 0 ){
        palabraEncontrada = true;
    }

    return palabraEncontrada;
}

function mostrar_pista( palabra_armada, pista ){

    let largo = palabra_armada.length;
    let text = "";

    //Recorre el array de la palabra armada y reemplaza por "_" la cantidad de letras que contiene la palabra
    for( i=0; i < largo; i++ ){

        if( palabra_armada[i] != undefined ){

            text += palabra_armada[i] + " ";
        }else{

            text += "_ ";
        }
    }
    
    pista.innerText = text;
}


/*=====================
 * Clases y Objetos 
 *=====================*/

//Clase Ahorcado
let Ahorcado = function(){
    
    this.intentosMaximos = 6;
    this.intentos = 0;  
    this.vivo = true;  
}


//Se agrega el método dibujar a la clase ahorcado por medio de prototype
Ahorcado.prototype.dibujar = function(){
    
    this.intentos ++;
    this.intentosMaximos --;

    if(this.intentos == 1){
        dibujarCabeza();

        contador.innerText = ("Te quedan " + this.intentosMaximos + " intentos");
        console.log("Te quedan " + this.intentosMaximos + " intentos");
    }

    if(this.intentos == 2){
        dibujarCuerpo();

        contador.innerText = ("Te quedan " + this.intentosMaximos + " intentos");
        console.log("Te quedan " + this.intentosMaximos + " intentos");
    }

    if(this.intentos == 3){
        dibujarBrazoIzquierdo();

        contador.innerText = ("Te quedan " + this.intentosMaximos + " intentos");
        console.log("Te quedan " + this.intentosMaximos + " intentos");
    }

    if(this.intentos == 4){
        dibujarBrazoDerecho();

        contador.innerText = ("Te quedan " + this.intentosMaximos + " intentos");
        console.log("Te quedan " + this.intentosMaximos + " intentos");
    }
    
    if(this.intentos == 5){
        dibujarPiernaIzquierda();

        contador.innerText = ("Te queda " + this.intentosMaximos + " intento");
        console.log("Te queda " + this.intentosMaximos + " intento");
    }
    
    if(this.intentos == 6){
        dibujarPiernaDerecha();

        this.vivo = false;

        contador.innerText = ("Te quedan " + this.intentosMaximos + " intentos, perdiste :(");
        console.log("Te quedan " + this.intentosMaximos + " intentos, perdiste :(");
        alert("Pepito murió :(");
    }

    if(this.intentos >= 7){
        location.reload(location);
    }
    
    //console.log(this.vivo);
}

/*================
*    Eventos
*================*/


let hombre = new Ahorcado();

dibujarPoste();


//Me traigo los id para la letra
let botonLetra = document.getElementById("boton-letra");
let l = document.getElementById("posible-letra");

//Me traigo los id para la palaba
let botonPalabra = document.getElementById("boton-palabra");
let p = document.getElementById("posible-palabra");

let pista = document.getElementById("pista");


let diccionarioPalabras = [
    "Amoxicilina",
    "Netflix",
    "Zapato",
    "Verano",
    "Platano",
    "Bacterias",
    "Cielo",
    "Cerveza",
    "Desoxirribunocleico",
    "Otorrinolaringologo",
    "Espejo",
    "Autobus",
    "Vacaciones",
    "Batman",
    "Escaleras",
    "Microfono",
    "Carreteras",
    "Espacial",
    "esternocleidomastoideo",
    "Alienigena",
    "Colombia",
    "Astronauta",
    "Bombillo",
    "Escalar",
    "Montaña",
    "Linfocitos",
    "Perro",
    "Luxenburgo",
    "Pizza"
];

let randomWord = Math.floor( Math.random() * ( ( diccionarioPalabras.length ) - 0 + 1 ) + 0 );

let palabra = diccionarioPalabras[ randomWord ];
palabra = palabra.toUpperCase();
palabra_armada = new Array( palabra.length );

//Eventos para para los botones
botonLetra.addEventListener('click', function(){ agregarLetra( l, palabra_armada, palabra, pista ) });
botonPalabra.addEventListener( 'click', function(){ agregarPalabra( p, palabra, pista ) } );

mostrar_pista( palabra_armada, pista );

alert("Soy pepito, salvame por favor :0");