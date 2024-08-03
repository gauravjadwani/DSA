



function search(arr,target){
    function linear(arr,idx){
        if(idx === arr.length){
            return NaN
        }
        if(arr[idx] === target){
            return idx
        }
        return linear(arr,idx+1)
    }
    return linear(arr,0)
}
const elm = search([1,2,45,65,-11],-1)
elm