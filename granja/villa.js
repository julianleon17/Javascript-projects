let button = document.getElementById( "reload" );
let villa = document.getElementById("villa");
let papel = villa.getContext("2d");



button.addEventListener( 'click', location.reload.bind( location ) );


/*====================
 *   O B J E C T S
 *====================*/

let fondo = {
    url:"img/tile.jpg",
    cargaOK: false,
};

let vaca = {
    url: "img/vaca.jpg",
    cargaOK: false,
    
};

let cerdo = {
    url: "img/cerdo.jpg",
    cargaOK: false,

}

let pollo = {
    url: "img/pollo.jpg",
    cargaOK: false,
    
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarMapa);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarvaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarcerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarpollo);

/*=======================
 *   F U N C T I O N S
 *=======================*/

function cargarMapa(){
    fondo.cargaOK = true;
    dibujar();
}

function cargarvaca(){
    vaca.cargaOK = true;
    dibujar();
}

function cargarcerdo(){
    cerdo.cargaOK = true;
    dibujar();
}

function cargarpollo(){
    pollo.cargaOK = true;
    dibujar();
}

function dibujar(){
    if( fondo.cargaOK == true ){
        papel.drawImage(fondo.imagen, 0,0)
    }
    if( vaca.cargaOK == true ){
        let vacasA = random_number(1,6);

        for(let vacas = 0; vacas<vacasA; vacas++ ){
            let num1 = random_number(0,420);
            let num2 = random_number(0,420);
            papel.drawImage( vaca.imagen, num1, num2 )
        }
    }
    if( cerdo.cargaOK == true ){
        let cerdosA = random_number(1,6);

        for(let cerdos = 0; cerdos<cerdosA; cerdos++ ){
            let num1 = random_number(0,420);
            let num2 = random_number(0,420);
            papel.drawImage(cerdo.imagen, num1, num2)
        }
    }
    if( pollo.cargaOK == true ){
        let pollosA = random_number(1,6);

        for(let pollos = 0; pollos<pollosA; pollos++ ){
            let num1 = random_number(0,420);
            let num2 = random_number(0,420);
            papel.drawImage(pollo.imagen, num1, num2)
        }
    }
}

// Generar Numeros Aleatorios 
function random_number(min,max){
    
    let result;
    result = Math.floor (Math.random() * ( max - min + 1 ) + min );     
    
    return result;
}