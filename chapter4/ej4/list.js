// Your code here.

console.log(arrayToList([10, 20, 30, 40 ]));
// → {value: 10, rest: {value: 20, rest: null}}

/* 
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
 */


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
  return {estructura};
}





//{value: 10, rest: {value: 20, rest: null}}
//{value: 10, rest: {value: 20, rest:{value: 30, rest: null}}}}
//{value: 10, rest: {value: 20, rest:{value: 30, rest: {value: 40, rest: null}}}}
