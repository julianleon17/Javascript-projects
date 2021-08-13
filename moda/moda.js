function getModa( list ) {

  if ( typeof(list) == 'number' ) { list = list.toString(); }

  let itemsObject = {};
  let modasObject = {};
  let previousModa;
  let moda;
  let j=0;
  let lotFinal;
  let indexFinal;

  // Counting number of each item in the list
  for ( i of list ) {
    itemsObject[i] = ( itemsObject[i] ) ? itemsObject[i] + 1 : 1;  //Ternary Operator
  }

  // Counting which ones are repeated
  for ( i in itemsObject ) {

    lotActual = itemsObject[i];

    if ( j == 0 ) {
      lotFinal = lotActual;
      indexFinal = i;
    }

    if ( lotFinal > lotActual ) {
      lotFfinal = lotFinal;
      indexFinal = indexFinal;
    }else{
      lotFinal = lotActual;
      indexFinal = i;
    }

    j++;
  }

  // Counting if there are more items that are 'moda' (Arithmetic - Fashion)
  for ( i in itemsObject ) {

    if ( itemsObject[i] == lotFinal ) {
      modasObject[i] = itemsObject[i];
    }
  }

  moda = indexFinal;

  console.group( "Moda de la cadena" );
    console.log( "Moda : '" + moda + "'" );
    console.log( "Cantidad : " + lotFinal );
    console.log( "Todos los elementos \n", itemsObject );

    if ( countObject(modasObject) > 1 ) { console.log( "Elementos que también son moda \n", modasObject ); } // if there are more than one, print that message

  console.groupEnd();
}


// This function count the items to any object
function countObject( object={} ) {

  let totalCount = 0;

  for ( let i in object ) { totalCount ++; }

  return totalCount;
}
