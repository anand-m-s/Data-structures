// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let nums = [18,1,3,2,66,32,-5,7]
// console.log(quickSort(nums));




function quickSort(arr,left=0,right = arr.length-1){
    if(left<right){
        let pivot = partition(arr,left,right);
        quickSort(arr,left,pivot-1)
        quickSort(arr,pivot+1,right)

    }
    return arr
}

function partition(arr,left,right){
    let pivot = arr[right]
    let i = left
    for(let j = left; j<right; j++){
        if(arr[j]<pivot){
            swap(arr,i,j)
            i++
        }
    }
    swap(arr,i,right)
    return i
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

const arr = [10,2,5,-6,11,4,5]
console.log(arr.length);
quickSort(arr)
console.log(arr);