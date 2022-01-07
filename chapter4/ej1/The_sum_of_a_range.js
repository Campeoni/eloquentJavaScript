console.log(sum(range(1,10,2)));


function range (start, end, step ){
  let listado = [];

  //controla si el parametro step vino informado. En caso de no venir informado inicializa.
  step = !step ?  (start < end ? 1 : -1) : step ;

  for(let i = start ; start < end ? i <= end : i >= end ; i += step ){
    listado.push(i);
  }

/* version 2 mas legible
  if (start < end){    
    step = !step ? 1 : step;
    for(let i = start ; i <= end ; i += step ){
      listado.push(i);
    }
  }else {
    step = !step ? -1 : step;
      for(let i = start ; i >= end ; i += step ){
        listado.push(i);      
    }
  }
*/

  return listado;
}

function sum (sumrango){

  let total = 0;  

  for(let i=0 ; i < sumrango.length ; i++ ){

    total += sumrango[i];  
  }
  return total;
}


