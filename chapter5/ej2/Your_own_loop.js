function loop(start,test,update,body){
    for (let i = start; test(i); i = update(i)){
        body(i);
    };
}

loop(10, n => n > 0, n => n - 1, n => n % 2 != 0 ? console.log(n + ": es impar") : console.log(n + ": es par")) ;


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1