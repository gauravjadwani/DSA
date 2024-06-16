

import Node from './node.js'

// let preorderArray = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1];
class Tree {
    constructor(){
        this.head = null
        this.index = 0
        // this.arr = [1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1]
        this.arr =[10,4,3,-1,-1,5,-1,-1,6,-1,-1]
        this.queue = []
    }
    build(){
        const elm = this.arr[this.index]
        if((elm == -1) || (this.index == this.arr.length)){
            this.index++
            return null
        }
        const node = new Node(elm)
        this.index++
        node.left = this.build()
        node.right = this.build()
        return node
    }
    checkTree(root) {
        // assuming this always a binary tree

        const val = root.val
        // this.queue.push(val)
        console.log("root val",val)
        const left = (root && root.left && this.checkTree(root.left)) || NaN    
        console.log("left",left)
        const right = (root && root.right && this.checkTree(root.right)) || NaN
        console.log("right",right)
        // console.log("main",val)

        return val
    }
    checkTree2(root) {
        // assuming this always a binary tree
        this.queue.push(root)
        while(this.queue.length){
            // const val = root.val
            root = this.queue[0]
            // this.queue.push(val)
            if(root.left){
                this.queue.push(root.left)
                // root = root.left

            }
            if(root.right){
                this.queue.push(root.right)
            }
            const shifted = this.queue.shift()
            console.log(shifted.val)

        }

        // console.log("root val",val)
        // const left = (root && root.left && this.checkTree(root.left)) || NaN    
        // console.log("left",left)
        // const right = (root && root.right && this.checkTree(root.right)) || NaN
        // console.log("right",right)
        // // console.log("main",val)
        
        // return val
    }
    sum(root){
        const val = root.val
        // this.queue.push(val)
        console.log("root val")
        const left = (root && root.left && this.sum(root.left)) || 0    
        console.log("left",left)
        const right = (root && root.right && this.sum(root.right)) || 0
        console.log("times")
        return left + right + root.val
    }
    // sum2(root) {
    //     if (!root) return 0;
    
    //     const val = root.val;
    //     console.log("Processing node with value:", val);
    
    //     const left = this.sum2(root.left) || 0;
    //     console.log("Left subtree sum of node with value", val, "is:", left);
    
    //     const right = this.sum2(root.right) || 0;
    //     console.log("Right subtree sum of node with value", val, "is:", right);
    
    //     const total = left + right + val;
    //     console.log("Total sum at node with value", val, "is:", total);
    
    //     return total;
    // }
    // sum2(root) {
    //     if (!root) return 0;  // Base case: if the root is null, return 0
    
    //     const val = root.val;
    //     console.log("Processing node with value:", val);
    
    //     const left = root.left ? this.sum2(root.left) : 0;  // Check if left child exists
    //     console.log("Left subtree sum of node with value", val, "is:", left);
    
    //     const right = root.right ? this.sum2(root.right) : 0;  // Check if right child exists
    //     console.log("Right subtree sum of node with value", val, "is:", right);
    
    //     const total = left + right + val;
    //     console.log("Total sum at node with value", val, "is:", total);
    
    //     return total;
    // }

    sum2(root) {
        if (!root) return 0;  // Base case: if the root is null, return 0

        const val = root.val;
        console.log("Processing node with value:", val);

        const left = root.left ? this.sum2(root.left) : 0;  // Check if left child exists
        console.log("Left subtree sum of node with value", val, "is:", left);

        const right = root.right ? this.sum2(root.right) : 0;  // Check if right child exists
        console.log("Right subtree sum of node with value", val, "is:", right);

        const total = left + right + val;
        console.log("Total sum at node with value", val, "is:", total);

        return NaN;
    }
}

const tree = new Tree()
const a = tree.build()
// console.log('tree.build()',tree.checkTree2(a))
// console.log('tree.build()',tree.sum2(a))
console.log('tree.build()',tree.callme(2))