// Your code here.

console.log(arrayToList([10, 20, 30, 40 ]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(20, prepend(30, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function arrayToList(coso){

  let estructura = {value: 0, rest:{}};
  let estructura_anterior = null;
  

  for(let i = coso.length-1; i >= 0; i--){

    estructura = {
      value: coso[i],
      rest: estructura_anterior
    }
    
    estructura_anterior = {
      value: coso[i],
      rest: estructura.rest
    }
  }
  return estructura;
}

function listToArray(coso){
  let array = [];

  for(let nodo = coso; nodo; nodo = nodo.rest){

    array.push(nodo.value);    
    
  }
  return array;
}

function prepend(value1,rest1){
  
  lista = { value:value1,
            rest: rest1};

  return lista;
}

function nth(lista, posicion){
  
  if (posicion == 0){
    return lista.value;
  }else
  {
    return nth(lista.rest, posicion - 1);
  };    
}