//factorial
// ============

// function factorial(n){
//     console.log(n);
//     if(n===0){
//         return 1
//     }else{

//         return n * factorial(n-1)
//     }
// }
// console.log(factorial(5))
// function factorial(n){
// if(n===0){
//     return 1
// }
//     return n*factorial(n-1)
// }
// console.log(factorial(0));


// fibinooci
//============

// function recursiveFibinooci(n){
//     if(n<2){
//         return n
//     }
//     return recursiveFibinooci(n-1)+recursiveFibinooci(n-2)
// }
// console.log(recursiveFibinooci(6));


// console.log(recursiveFibinooci(0));
// console.log(recursiveFibinooci(1));


// function fibinooci(num){
//    let prev= 0
//    let curr =1
//     for(let i =2 ;i<=num;i++){
//         let next = prev +curr
//         let prev = curr 
//         curr = next
//     }   
// }

// fibinooci(6)

// linear search
//===============

let nums=[12,34,2,4,2,4,21,1];
function linearSearch(arr,t){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t)
        res.push(i)
    }
    return res.length>0?res:-1
}
console.log(linearSearch(nums,2))

