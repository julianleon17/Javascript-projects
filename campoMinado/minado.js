
function jugar( e ) {
console.log(e.target);

    //funciones 
    function cambiarTexto(status){
        document.getElementById("gameStatus").innerHTML= status; 
    }

    function explotar(){
        console.log("explotaste");
        alert("¡explotaste!");
        cambiarTexto("¡Pailas, rey!");
        e.target.style.backgroundColor = 'red';
    }
    
    function sobrevivir(){
        console.log("sigues vivo");
        cambiarTexto(" sigues vivo :]");
        e.target.style.backgroundColor = 'green';
    }

    //números Aleatorios
    var numA = Math.floor( Math.random() * (1 - 0 + 1) + 0 );
    var numB = Math.floor( Math.random() * (1 - 0 + 1) + 0 );


    //decisión 
    if ( numA == numB ){
        sobrevivir();
    }
    else{
        explotar();
    }
}

//obtenemos los id y clases de los elementos 

var botons = document.getElementsByClassName( "field-game" );
var resetPage = document.getElementById("resetpage");


//usamos las funciones 

for (let i = 0; i < botons.length; i++) {
    botons[i].addEventListener( 'click', jugar );
}


resetPage.addEventListener("click",location.reload.bind(location));
