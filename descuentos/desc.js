let calculate = document.getElementById( "cal" );

calculate.addEventListener( "click", makeDiscount );

function makeDiscount() {

  //Get total price of product
  let tp = document.getElementById( "total-price" );
  let totalPrice = parseInt(tp.value);
  
  //Get discount of product
  let disc = document.getElementById( "disc" );
  let discount = parseInt(disc.value);

  //Get text to replace
  let replaceText = document.getElementById( "finalPrice" );
  let errorText = document.getElementById( "errorText" );

  let finalPrice = Math.floor( totalPrice * (100 - discount) / 100 ); //Calculate final price


  if ( !totalPrice || !discount ) { // If any of these are empty, it will send the error messages

    console.log( "Hay un campo vacío o no correspondiente al requerido, por favor llena o cambia antes de continuar" );
    errorText.innerText = "Hay un campo vacío o no correspondiente al requerido, por favor llena o cambia antes de continuar";
    replaceText.innerText = "$ $ $";
  }else{

    errorText.innerText = "";

    //Add points to money
    finalPrice = addPointsToMoney( finalPrice );
    totalPrice = addPointsToMoney( totalPrice );

    replaceText.innerText = finalPrice; //Print final price of product on HTML

    //Print values in console
    console.group("Valores");

      console.log( "Valor total del producto : $" + totalPrice );
      console.log( "Descuento : " + discount + "%");
      console.log( "El precio a pagar es de : $" + finalPrice );

    console.groupEnd();
  }
}



// Return a string

function addPointsToMoney( money ) {

  let totalMoneyString;

  // Placing money points

    if ( typeof(money) == 'number' ) {
      totalMoneyString = money.toString();
    }

    let size = totalMoneyString.length - 1;
    let temporalString = "";
    let j = 0;

    for( i=size; i>=0; i-- ) {

      if( j == 3 ) {
        temporalString += ".";
        j = 0;
      }

      temporalString += totalMoneyString[i];

      j++;
    }


    // Reversing the chain

    let sizeTemporalString = temporalString.length - 1;
    let moneyString = "";

    for( i=sizeTemporalString; i>=0; i-- ) {
      moneyString += temporalString[i];
    }

  return moneyString;
}
