function subset(arr){
    let current = arr[0]
    let maxglobal = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i] < current+arr[i]){
            current=current+arr[i]
        }else{
            current = arr[i]
        }
        if(maxglobal< current){
            maxglobal = current
        }
    }
    return maxglobal
}

let arr = [-3,5,-2,1]
console.log(subset(arr))