// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


let arrayValue = [1, 2, 3, 4, 5, 6 ] ;
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [6, 5, 4, 3, 2, 1] 


function reverseArray(listado){
  let listado_nuevo = [];
  let posicion = listado.length - 1;

  for(let i=0; i < listado.length; i++ ){
    listado_nuevo[i] = listado[posicion]; 
    posicion--;
  }
  return listado_nuevo;
}

function reverseArrayInPlace(listado){
  let pos_last = listado.length - 1;  

  for(let i=0; i < Math.floor(listado.length/2) ; i++ ){
    let pivot =0;
    pivot= listado[i] ;
    listado[i] = listado[pos_last]; 
    listado[pos_last] = pivot; 
    pos_last -= 1;    
  }
  return listado;
}


