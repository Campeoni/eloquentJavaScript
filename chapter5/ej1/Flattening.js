let arrays = [[1, 2, 3], [4, 5], [6]];

//console.log(arrays.reduce((flat, current) => flat.concat(current), []));

console.log(arrays.reduce(concatenarlos,[]));

function concatenarlos(a,b,c) { 
  console.log("estoy parado en el indice:" + c);
    return a.concat(b); 
};
// Your code here.
// → [1, 2, 3, 4, 5, 6]


