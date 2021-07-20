var dibujo = document.getElementById("lienzo")
var lienzo = dibujo.getContext("2d");


/****************
 * Limpiar lienzo
 ****************/
function limpiarLienzo()
{
    dibujo.width = 500;
    dibujo.height = 500;
}


/*********************************************************
 *                  dibujar una linea o Hacer una pincelada
 *********************************************************/
function dibujarLinea(x_inicial,y_inicial,x_final,y_final,color,grosor){
    lienzo.beginPath();
    lienzo.lineWidth = grosor;
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final);
    lienzo.closePath();
    lienzo.stroke();

    console.log("¡Lineas dibujadas!");
}



/*********************************************************
 *                Hacer trazos o pinceladas aleatorias
 *********************************************************/

function lineasAleatorias(){
    var numAl1 = Math.floor( Math.random() * (500 - 0 +1) + 0 ); //número aleatorio
    var numAl2 = Math.floor( Math.random() * (500 - 0 +1) + 0 ); //número aleatorio
    var numAl3 = Math.floor( Math.random() * (500 - 0 +1) + 0 ); //número aleatorio
    var numAl4 = Math.floor( Math.random() * (500 - 0 +1) + 0 ); //número aleatorio
    var numAlp = Math.floor( Math.random() * (20 - 0 +1) + 0 ); //número aleatorio pequeño
    dibujarLinea(numAl1,numAl2,numAl3,numAl4,colorRGB(),numAlp);

    
    //colores aleatorios
    function generarNumero(numero){
        return (Math.random()*numero).toFixed(0);
    }
    
    function colorRGB(){
        var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        return "rgb" + coolor;
    }
}


/*********************************************************
 *                Hacer Circulos aleatorios
 *********************************************************/

function circulosAleatorios(){
    var numAl1 = Math.floor( Math.random() * (500 - 0 +1) + 0 ); //número aleatorio
    var numAl2 = Math.floor( Math.random() * (500 - 0 +1) + 0 ); //número aleatorio
    var numAl3 = Math.floor( Math.random() * (200 - 0 +1) + 0 ); //número aleatorio
    var numAlp = Math.floor( Math.random() * (20 - 0 +1) + 0 ); //número aleatorio pequeño
    dibujarCirculo(numAl1,numAl2,numAl3,numAlp,colorRGB());

    
    //colores aleatorios
    function generarNumero(numero){
        return (Math.random()*numero).toFixed(0);
    }
    
    function colorRGB(){
        var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
        return "rgb" + coolor;
    }
}



/*********************************************************
 *                   Dibujar un circulo
 *********************************************************/
function dibujarCirculo(x,y,r,grosor,color){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.arc(x,y,r,(Math.PI * 2), false);
    lienzo.closePath();
    lienzo.stroke();

    console.log("¡Circulo dibujado!");
}


/*********************************************************
 *                  Dibujar la grilla
 *********************************************************/
function dibujarGrilla(){
    
    const espacioLinea = 10;
    const numeroLineas = 50;
    
    for( linea = 0; linea <= 500; linea ++ ){
        var punto = espacioLinea * linea;
        dibujarLinea(punto,0,punto,500,"black",1); //Lineas verticales
        dibujarLinea(0,punto,500,punto,"black",1); //Lineas horizontales
        dibujarLinea(0,punto,punto,0,"black",1); //Lineas de izquierda a derecha hacia arriba
    }

    
    //for(i = 0; i <= numeroLineas; i ++){
    //    for(j = 50; j >= 0; j -= 10){
    //        let x1 = 0;
    //        let y1 = espacioLinea * i;
    //        let x2 = j - espacioLinea ;
    //        let y2 = 50;
    //        dibujarLinea(0,punto2,punto,500,"black",1);            
    //    }
    //}


    //setTimeout(function(){ dibujarLinea(x1,y1,x2,y2,"black",1) },1000);            

    
    
    //for( let j = 500; j >= 0; ){
    //    
    //    j = j -10;
    //
    //    
    //}
    //
    //for(let i = 0; i <= 50; i++){
    //    
    //    const x1 = 0;
    //    let y1 = j;
    //    let x2 = i * 10;
    //     const y2 = 500;
    //    
    //    dibujarLinea(x1,y1,x2,y2,"black",1);            
    //}

    //puntos de eje x

    //for(let i = 0; i <= numeroLineas; i++){
    //    
    //    const x1 = 250;
    //    let y1 = 500;
    //
    //    let x2 = i * espacioLinea;
    //    const y2 = 0;
    //    
    //    dibujarLinea(x1,y1,x2,y2,"black",1);            
    //
    //}


    //puntos del eje y

    //for( let j = 500; j >= 0; j -= 10){
    //
    //    const x1 = 500;
    //    let y1 = j;
    //
    //    let x2 = 0;
    //    const y2 = 250;
    //
    //    dibujarLinea(x1,y1,x2,y2,"black",1);            
    //}

    console.log("¡Grilla dibujada!");

}


/*********************************************************
 *                      Eventos
 *********************************************************/
var botonGrilla = document.getElementById("grilla");
botonGrilla.addEventListener('click',dibujarGrilla);

var circulo = document.getElementById("circulo");
circulo.addEventListener('click',function(){dibujarCirculo(250,250,200,12,"red")});


//var borrar = document.getElementById("borrar");
//borrar.addEventListener('click',location.reload.bind(location));

var limpiar = document.getElementById("limpiar");
limpiar.addEventListener('click',limpiarLienzo);


var trazos = document.getElementById("lineas-aleatorias");
trazos.addEventListener('click',lineasAleatorias);


var circulos = document.getElementById("circulos-aleatorios");
circulos.addEventListener('click',circulosAleatorios);



