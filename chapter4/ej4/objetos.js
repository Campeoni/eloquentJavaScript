// Your code here.

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
/*
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {object: 2, here: {is: "an"}}));
// → true
*/

function deepEqual (obj1, obj2){

  if (obj1 === obj2) return true;

  if ((typeof(obj1) == "object" && obj1 != null) && (typeof(obj2) == "object" && obj2 != null)){
    if (Object.keys(obj1).length == Object.keys(obj2).length){      
      for (let i = 0 ; i <= Object.keys(obj1).length - 1; i++){        
        //primero comprar key
        if (Object.keys(obj1)[i] == Object.keys(obj2)[i]){
          if (Object.values(obj1)[i] == Object.values(obj2)[i]){
            continue;
          }else{
            return false;
          };
        }else{
          return false;
        }; 
      };    
      return true; 
    }else{
      return false;
    };
  };
};


/*respuesta original
  function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
  }

  let obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → true
*/