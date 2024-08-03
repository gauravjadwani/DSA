


function search(arr,target,first,last){
    // if(first == last){
    //     return -1
    // }



    if(arr[first] <= target && arr[last] >= target){

    }else{
        search(arr,target,first+blockSize,last+blockSize) 
    }
    // if(arr[mid] ===  target){
    //     return mid
    // }
    // else if(arr[mid] > target){
    //     return search(arr,target,0,mid-1)
    // }else{
    //     search(arr,target,mid+1,arr.length-1) 
    // }
}


const arr = [1,2,3,4,5,6,7]
const target = 7
const blockSize = Math.floor(Math.sqrt(arr.length - 1))
console.log(search(arr,target,0,0,blockSize))
console.log("fde",Math.floor(Math.sqrt(6)))