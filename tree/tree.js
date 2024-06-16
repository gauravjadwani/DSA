import Node from './node.js'
function buildTree(preorderArray) {
    let index = { value: 0 }; // Use an object to keep track of index across recursive calls

    function helper() {
        if (index.value >= preorderArray.length || preorderArray[index.value] === -1) {
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
let preorderArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
let root = buildTree(preorderArray);
console.log(root)