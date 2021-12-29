console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(10, 10));
// → Son iguales

// Your code here.
function min(val1, val2)
{
	if (val1 < val2)
    {    
      return val1;
    }
  	else if (val1 > val2)
    {    
      return val2;
    }
  	else
    {    
      return "son iguales";
    }  
};