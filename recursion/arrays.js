function checkArr(arr,idx=0){
    /**
     * Base condition 1 if idx == length
     *  2 idx < idx+1
     * Motto -> idx >= idx+1
     * call checArr(arr,idx)
     * return call checArr
     */


    if((arr[idx]>arr[idx+1])){
        return false
    }
    if(idx+2 == arr.length){
        return true
    }
    return checkArr(arr,idx+1)
}
console.log(checkArr([2,2,45,65,100]))