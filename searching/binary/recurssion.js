


function binarySearch(arr,target,left=0,right=arr.length-1,){
    

    if(left >= right){
        return -1
    }
    const mid = parseInt((left+right)/2)
    if(mid == target){
        return mid
    }
    if(arr[mid] < target){
        return binarySearch(arr,target,left+1,right)
    }else{
        return binarySearch(arr,target,left,right+1)
    }
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 5;
const result = binarySearch(sortedArray, targetValue);
result