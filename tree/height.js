/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
import BST from './index.js'
let le=1;
let ri=1
var maxDepth = function(root) {
    if(!(root && root.left) && !(root && root.right)){
       return {le,ri}
     }
    if(root.left){
       le++
    }
    if(root.right){
       ri++
       }
    return (maxDepth(root.left) && maxDepth(root.right))
    // return 
}

const bst1 = new BST()
bst1.insert(30)
bst1.insert(15)
bst1.insert(16)
bst1.insert(17)
bst1.insert(79)
bst1.insert(90)
bst1.insert(10)
// const bst2 = new BST()
// bst2.insert(0)
// // bst2.insert(15)
// // bst2.insert(79)
// // bst2.insert(90)
// // bst2.insert(10)
// // bst2.insert(10)
// console.log(BST)
// const sm = new Same()
console.log('check',maxDepth(bst1.head))