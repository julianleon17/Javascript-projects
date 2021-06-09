let buttonToExtract = document.getElementById( "extraer" );
let amountToWithdraw = document.getElementById( "cantidad" );

buttonToExtract.addEventListener( "click", function(){ hand_over_money( amountToWithdraw, cashier ) } );


/*=================
 *  CLASS BILLETE
 *=================*/

const Billete = class {

    constructor( value, amount ){

        this.value = value;
        this.amount = amount;
    }
}

let cashier = [];
let purse = [];

cashier.push( new Billete( 50, 3 ) );
cashier.push( new Billete( 20, 3 ) );
cashier.push( new Billete( 10, 5 ) );
cashier.push( new Billete( 5, 10 ) );
cashier.push( new Billete( 2, 20 ) );

/*========T E S T

for ( i of cashier ) {
    
  if ( i.value == 50 ) {

    console.log( i );
  }
}

*/




function hand_over_money( remove, cashier ){

    let amountToWithdraw = remove.value;
    let totalMoneyOfCashier = 0;
    
    for ( i of cashier ) {

        totalMoneyOfCashier += i.value * i.amount;
    }

    if ( amountToWithdraw > totalMoneyOfCashier ) {

        alert( "Lo siento, no tengo suficiente dinero :(" );
    }else{

        let billetes = calculate_money( amountToWithdraw );
        let totalToReturn = 0;

        console.log(  "Devueltas : " );

        for ( b of billetes ) {

            totalToReturn += b.value * b.amount;
            console.log( b.value + " : " + b.amount );
        }

        if ( totalToReturn != amountToWithdraw ) {

            console.log( totalToReturn );            
            alert( "No te puedo dar esta cantidad de dinero tan exacta :(" );
        }else{

            console.log( totalToReturn );
            alert( "¡Retiro Exitoso!" );
        }
    }
}




/*=======================
 *   F U N C T I O N S
 *=======================*/

function calculate_money( amountToWithdraw ) {

    let totalToReturn = [];
    
    for ( ticket of cashier ) {
        
        amountRequired = Math.floor( amountToWithdraw / ticket.value );

        if ( amountRequired > ticket.amount ) {

            amountRequired = ticket.amount;
        }

        amountToWithdraw = amountToWithdraw - ( amountRequired * ticket.value );


        //Create each ticket
        let billete = {};
        billete[ "value" ] = ticket.value;
        billete[ "amount" ] = amountRequired;
        
        totalToReturn.push( billete ); //add the ticket to the returns
    }
    return totalToReturn;
}



/*======== T R A S H

//let positionTicket = cashier[ (cashier.length -1) ] ;
//console.log( divisible( amountToWithdraw, positionTicket ) );

function divisible( amount, ticket ) {
    
    //console.log( ticket );
    let amountToWithdraw = parseInt( amount );
    
    //console.log( amountToWithdraw );
    
    let toReturn = false;

    //console.log( amountToWithdraw % lastTicket.value );

    if ( amountToWithdraw % ticket.value == 0 ) {

        toReturn = true;
    }    
    return toReturn;
}
*/





