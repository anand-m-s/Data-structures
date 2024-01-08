// fibinocci 
function fibinocci(num){
    let fib =[0,1];
    for(let i =2 ; i< num ;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib;
}
console.log(fibinocci(10));
 



// factorial
function factorial(n){
    let result =1;
    for(let i=2;i<=n;i++){
        result = result*i;
    }
    return result;
}
    
factorial(0)


// Prime 
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
isPrime(5)
console.log("sadfsadfsadf")