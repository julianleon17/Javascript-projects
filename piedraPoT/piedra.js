var piedra = document.getElementById("piedra");
var papel  = document.getElementById("papel");
var tijera = document.getElementById("tijera");
var resultado = document.getElementById("resultado");


piedra.addEventListener("click", jugarPiedra);
papel.addEventListener("click", jugarPapel) ;
tijera.addEventListener("click", jugarTijera);


//funciones 

function jugarPiedra(){

    //genera el numero aleatorio
    let numAl = Math.floor(Math.random()* (2 - 0 + 1) + 0);

    let maquina = numAl;
      
    //eleccion de la maquina y el resultado
    switch(maquina){
        
        case 0:(maquina == 0)
            alert("Jugaste piedra \n Maquina jugó Piedra \n \n ¡Ohh! hemos quedado en empate");
            console.log("Jugaste piedra \n Maquina jugó Piedra \n ¡Ohh! hemos quedado en empate");
        break;

        case 1:(maquina == 1)
            alert("Jugaste piedra \n Maquina jugó Papel \n \n Te lo dije, no me puedes ganar >:)");
            console.log("Jugaste piedra \n Maquina jugó Papel \n Te lo dije, no me puedes ganar >:)");
        break;
        
        default:
        alert("Jugaste piedra \n Maquina jugó Tijera \n \n ¡que está pasando! Como me pudiste ganar :(");           
        console.log("Jugaste piedra \n Maquina jugó Tijera \n ¡que está pasando! Como me pudiste ganar :("); 
    }

}


function jugarPapel(){

    //genera el numero aleatorio
    let numAl = Math.floor(Math.random()* (2 - 0 + 1) + 0);

    let maquina = numAl;
      
    //eleccion de la maquina y el resultado
    switch(maquina){
        
        case 0:(maquina == 0)
            alert("Jugaste papel \n Maquina jugó Piedra \n \n ¡Felicitaciones! me ganaste :(");
            console.log("Jugaste papel \n Maquina jugó Piedra \n ¡Felicitaciones! me ganaste :(");
        break;

        case 1:(maquina == 1)
            alert("Jugaste papel \nMaquina jugó Papel \n \n Tienes suerte el día de hoy");
            console.log("Jugaste papel \n Maquina jugó Papel \n Tienes suerte el día de hoy");
        break;
        
        default:
        alert("Jugaste papel \nMaquina jugó Tijera \n \n Te lo dije, no me puedes ganar >:)");           
        console.log("Jugaste papel \n Maquina jugó Tijera \n Te lo dije, no me puedes ganar >:)");           
    }
}


function jugarTijera(){

    //genera el numero aleatorio
    let numAl = Math.floor(Math.random()* (2 - 0 + 1) + 0);

    let maquina = numAl;
      
    //eleccion de la maquina y el resultado
    switch(maquina){
        
        case 0:(maquina == 0)
            alert("Jugaste tijera \nMaquina jugó Piedra \n \n Cuando los peces vuelen me podrás ganar ;)");
            console.log("Jugaste tijera \n Maquina jugó Piedra \n Cuando los peces vuelen me podrás ganar ;)");
        break;

        case 1:(maquina == 1)
            alert("Jugaste tijera \nMaquina jugó Papel \n \n Hoy tengo ganas deperder ¡ganaste! ");
            console.log("Jugaste tijera \n Maquina jugó Papel \n Hoy tengo ganas deperder ¡ganaste!");
        break;
        
        default:
        alert("Jugaste tijera \nMaquina jugó Tijera \n \n Esto es un empate justo");           
        console.log("Jugaste tijera \n Maquina jugó Tijera \n Esto es un empate justo");           
    }
}
