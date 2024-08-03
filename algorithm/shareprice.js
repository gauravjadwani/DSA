

// https://leetcode.com/problems/daily-temperatures
function price(arr) {
    const res = new Array(arr.length).fill(0)
    const stack = [0]
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] > arr[stack[stack.length - 1]] && stack.length != 0) {
            const idx = stack.pop()
            res[idx] = i - idx
        }
        stack.push(i)
    }
    return res
}

price([30, 60, 90])


/**
 * Scan the elems
 *  if arr[i] > arr[top]
 *      while  reduce top  till 
 *              arr[i]<top or stack is empty
 *  else
 *      stack push i
 * 
 * 
 */