let options = document.getElementById( "planets" );
let planet = document.getElementById( "planet" );
let p = document.getElementById( "peso" );

let button = document.getElementById( "calcular" );

const G_TIERRA = 9.8;

//Gravity in other panets
let gravity = {

    "marte" : 3.7,
    "jupiter" : 24.8,
    "mercurio" : 3.7,
    "urano" : 8.87,
    "saturno" : 10.44,
    "neptuno" : 11.15,
    "luna" : 1.62,
};

print_planets( gravity ); //This function show the list of planets available

button.addEventListener( 'click', function(){ calcularPeso( planet, p, G_TIERRA, gravity ) } );


/*======================
 *   F U N C T I O N S
 *======================*/

function calcularPeso( planet, p, G_TIERRA, gravity ) {

    let gravityOPlanet = planet.value;
    let peso = p.value;

    let sizePlanets = countObject( gravity );

    if ( gravityOPlanet > sizePlanets || gravityOPlanet < 0 ) {
        alert( "Desconozco este planeta, ¡no lo he explorado! :(" );
    }else{
        
        let j = 0;
        let i = 0;

        for ( i in gravity ) {

            j++;

            if ( j == gravityOPlanet ) {
                break;
            }
        }

        peso_final = Math.floor( peso * gravity[i] / G_TIERRA );

        alert( "Tu peso en " + i + " es de " + peso_final + " kilos" );
    }
}


function print_planets( gravity ) {

    let planets = "";
    let j = 0;

    for ( let i in gravity ) {

        j++;
        console.log( i );
        planets += j + ' -- ' + i + "\n";
    }

    options.innerText = planets;
}


function countObject( object ) {

    //This function only shows the number attributes of an object

    let num = 0;
    for ( let i in object ) {
        num ++;
    }
    return num;
}