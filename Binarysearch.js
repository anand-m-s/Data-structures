let  nums = [3,5,2,1,5,6,7,-1]
nums.sort((a,b)=>a-b);
console.log(nums);
function search(nums,target){
    let start =0 
    let end = nums.length-1
    while(start<=end){
        let middle = Math.floor((start+end)/2)
        if(nums[middle]===target){
            return middle
        }else if(nums[middle]<target){
            start = middle+1;
        }else{
            end=middle-1
        }
    }
    return -1
}
console.log(search(nums,-1))
