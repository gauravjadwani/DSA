

function search(arr,target){
    let start=0;
    const blockSize = Math.floor(Math.sqrt(arr.length - 1))
    let end = blockSize
    while(start < arr.length-1){
        if(target >= arr[start] && target <= arr[end]){
            break;
        }
        start = start + blockSize
        end = end + blockSize
    }
    if(end > arr.length){
        return -1
    }else{
        for(let i=start; i<=end;i++){
            if(arr[i] === target){
                return i
            }
        }
        return -1
    }
}

const arr = [1,2,3,4,5,6,8,9,80,101]
const target = 101
console.log(search(arr,target))