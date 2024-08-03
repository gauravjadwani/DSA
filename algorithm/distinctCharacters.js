
// https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/


/**
 * scan the elements and get the occurences
 * 
 * 
 * scan the elems
 *  and if elm is less than top pop
 * 
 * 
 */


function sub(str){
    const map = {}
    const stack = []
    const onStack = {}
    // onStack[str[0]]=str[0]
    for(let i=0;i<str.length;i++){
        // if(map[str[i]]){
        //     map[str[i]] ++
        // }else{
        //     map[str[i]] = 1
        // }
        map[str[i]] = i
    }
    // map[str[0]]--
    for(let i=0;i<str.length;i++){

        const ascii = str.charCodeAt(i)
        if(onStack[str[i]]){
            // map[str[i]] --
            continue
        }
        // const stackAscii = stack.length > 0 && stack[stack.length-1].charCodeAt(0)
        while((stack.length > 0) &&  ((str[i] < stack[stack.length-1]) && (map[stack[stack.length - 1]] > i))){
            const popelm = stack.pop()
            delete onStack[popelm]
        }
        stack.push(str[i])
        onStack[str[i]]= str[i]
        // map[str[i]] --
    }
    return stack.join('')
}

console.log(sub("cbaacabcaaccaacababad"))

// var smallestSubsequence = function(s) {
//     const stack = [];
//     const seen = {};
//     const occurence = {};
//     const n = s.length;
//     for(let j = 0; j < n; j++){
//         occurence[s[j]] = j;
//     }
//     for(let i = 0; i < n; i++){
//         if(seen[s[i]]) continue;
//         while(stack.length > 0 && s[i] < stack[stack.length - 1] && occurence[stack[stack.length - 1]] > i){
//             let cut = stack.pop();
//             seen[cut] = false;
//         }
//         stack.push(s[i]);
//         seen[s[i]] = true;
//     }
//     return stack.join('');
// };

// console.log(smallestSubsequence("cbaacabcaaccaacababa"))