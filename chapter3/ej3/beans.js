// Your code here.

const { arrayBuffer } = require("stream/consumers");

function countChar(cadena,letra){

  let cantidad = 0;
  
  for (let i = 0; i< cadena.length; ++i){

      if (cadena[i] === letra ){
        cantidad++; 
      }
  }
  return cantidad;
};

console.log(countChar("kakkerlak", "k"));
// → 4




