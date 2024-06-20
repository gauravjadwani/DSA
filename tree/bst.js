/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }
    // let i = 0
    const head = new TreeNode(nums[0])
    // let current = head
    function traverse(root,node){
        if(root == null){
            // head = node
            return node
           }
        if(node.val < root.val){
            root.left = traverse(root.left,node)
        }else{
            root.right =  traverse(root.right,node)
        }
        return root
    }

    // function insertIntoBST(root, val) {
    //     if (root === null) {
    //         return new TreeNode(val);
    //     }
    //     if (val < root.val) {
    //         if (root.left === null) {
    //             root.left = new TreeNode(val);
    //         } else {
    //             insertIntoBST(root.left, val);
    //         }
    //     } else {
    //         if (root.right === null) {
    //             root.right = new TreeNode(val);
    //         } else {
    //             insertIntoBST(root.right, val);
    //         }
    //     }
    // }
    function insertIntoBST2(root, node) {
        if (root === null) {
            return node;
        }
        if (node.val < root.val) {
            root.left = insertIntoBST2(root.left, node);
        } else {
            root.right = insertIntoBST2(root.right, node);
        }   
        return root
    }

    for(let i=1;i<nums.length;i++){
        const node = new TreeNode(nums[i])
        insertIntoBST2(head,node)
    }
    return head
};


function count(head){
    if(head == null){
        return 0
    }
    const leftTree =  count(head.left) 
    const rightTree = count(head.right) 
    return leftTree+rightTree+1
}
const a = (sortedArrayToBST([11,9,8,10,13,12,14]))
// a
// let c=count(a)
// c

function sum(head){
    if(head == null){
        return 0
    }
    const leftTree = sum(head.left)
    const rightTree = sum(head.right)
    return leftTree+rightTree+head.val
}
let s=sum(a)
s