
// find the subset with the max sum


function subsset(arr){
    let max = arr[0]
    let current = arr[0]
    let main = []
    let sub = [arr[0]]
    for(let i=1;i<arr.length;i++){
        if(current < current+arr[i]){
            current = current+arr[i]
            if(max < current){
                max = current
            }
            // sub.push(arr[i])
        }else{

        }
    }
}
// subsset([1,200,6,-400,250,150])

function maxSubArraySum(arr) {
    let max_sum = arr[0];
    let current_sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        current_sum = Math.max(arr[i], current_sum + arr[i]);
        max_sum = Math.max(max_sum, current_sum);
    }

    return max_sum;
}

// Example usage:
let arr = [1, 200, 6, -400, 250, 151];
console.log(maxSubArraySum(arr)); // Output: 400
