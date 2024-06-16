
function print(str,backindex=str.length-1){

    if(backindex<0){
        return
    }
    console.log(str.charAt(backindex))
    // backindex = backindex-1
    print(str,backindex-1)
}
// print("gaurav")
function printFirstAndLast(str,first,last,idx=0){

    if(idx>str.length-1){
        if(isNaN(last)){
            last = first
        }
        return {first,last}
    }

    if(str.charAt(idx) == 'a'){
        if(isNaN(first)){
            first=idx
        }else{
            last=idx
        }
    }
    return printFirstAndLast(str,first,last,idx+1)
}
// console.log(printFirstAndLast("gaurav",NaN,NaN))

// function moveStr(arr,ptr,n=0){
//     /**
//      * traverse the string from the right->left
//      * ptr = largest non-x char
//      * 
//      */
//     if(n > arr.length-1){
//         return arr.join("")
//     }
//     if(arr[n] != 'x'){
//         // if(ptr > n){
//         //     ptr = n
//         // }
//         if(!isNaN(ptr)){
//             // arr[n] = arr[ptr]
//             arr[ptr] =  arr[n]
//             arr[n] = 'x'
//             ptr = n
//         }else{
//             ptr = n
//         }
//     }else{
//         // if(isNaN(ptr)){
//         //     ptr = n
//         // }
//         ptr = n

//     }
//     return moveStr(arr,ptr,n+1)
// }
// console.log(moveStr("axbcxxd".split(""),NaN))


function subsequence(str,newStr="",idx=0){

    if(idx >= str.length){
        console.log(newStr)
        return
    }

    subsequence(str,newStr+str[idx],idx+1) 
    subsequence(str,newStr,idx+1)

}

// subsequence("abc") 


// function subsequence2(str,result="",n=0){
//     if(n==str.length){
//         console.log("res",result)
//         return
//     }
//     subsequence2(str,result+str[n],n+1)
//     subsequence2(str,result,n+1)
// }
// subsequence2("abcd",)



// 0
// 1
// 2
// 3




/**
 * 
 * 1 - traverse string
 * 2 - freeze one index and do choices between the other
 * 
 * 
 * @param {*} mainStr 
 * @param {*} str 
 * @param {*} result 
 * @param {*} idx 
 * @returns 
 */
function perm(mainStr,str=mainStr,result,idx=0){
    if(idx == mainStr.length){
        return
    }
    console.log("str",str)
    /**
     * string ko constant
     * 
     */
    perm(mainStr,mainStr[idx])
    // perm(mainStr,mainStr.substring(idx+1),result,idx+1)
}

// perm("abc")



function permute(str) {
    // let result = [];

    // Helper function to generate permutations
    function permuteHelper(prefix, remaining) {
        if (remaining.length === 0) {
            // result.push(prefix);
            console.log(prefix)
        } else {
            for (let i = 0; i < remaining.length; i++) {
                permuteHelper(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
            }
        }
    }

    permuteHelper("", str);
    return result;
}

const string = "abcd";
const permutations = permute(string);
console.log(permutations);


