import Node from './node.js'
function buildTree(preorderArray) {
    let index = { value: 0 }; // Use an object to keep track of index across recursive calls

    function helper() {
        if (index.value >= preorderArray.length || preorderArray[index.value] === -1|| preorderArray[index.value] === null) {
            index.value++; // Move to the next element in the array
            return null;
        }

        let node = new Node(preorderArray[index.value]);
        index.value++;
        node.left = helper();
        node.right = helper();

        return node;
    }

    return helper();
}

// Example usage:
// let preorderArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
let preorderArray = [10,5,-3,3,2,null,11,3,-2,null,1]
let root = buildTree(preorderArray);
console.log(root)



    // // https://leetcode.com/problems/path-sum-iii/
    // pathsum2(root,targetSum){
    //     let count = 0
    //     function traverse(root,currentSum){
    //         if(root.val === null){
    //             return null
    //         }
    //         if(root.val <= targetSum){
    //             currentSum = currentSum + root.val
    //         }
    //         if(targetSum == currentSum){
    //             count++
    //         }
    //         traverse(root.left, currentSum)
    //         traverse(root.right, currentSum)
    //     }
    //     traverse(root,0,0)
    //     count
    // }