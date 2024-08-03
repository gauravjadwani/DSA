import Node from './node.js'

class BinarySearchTree{
    constructor(){
        this.head = null
    }
    add(root,val){
        /**
         * check if this is for right or left
         */
        if(root == null){
            const node = new Node(val)
            return node
        }

        if(val < root.val ){
            root.left = this.add(root.left,val)
        }else{
            root.right = this.add(root.right,val)
        }
        return root
    }
    addHelper(arr,bst){
        // const arr = [5,1,3]
        // const bst = new BinarySearchTree()
        // const root = null
        // bst.head
        for(let i=0;i<arr.length;i++){
            // this.head = bst.head
            bst.head = bst.add(bst.head,arr[i]) 
        }
    }
    search(head,key){
        if(head === null){
            return false
        }
        if(key == head.val){
            return true
        }
        if(key < head.val){
            return this.search(head.left,key)
        }else{
            return this.search(head.right,key)
        }
    }
    binaryTreePaths(root){
        const res = []
        function traverse(root,path){
            if(root == null){
                return root
               }
            path = (path === "") ? root.val+"" : (path + "->"+root.val)
            const left =  traverse(root.left,path)
            const right =  traverse(root.right,path)
            if(left === null && right === null){
                res.push(path)
               } 
        }
        traverse(root,``)
        return res
    }
    // https://leetcode.com/problems/path-sum-ii/
    pathsum(root,target){
        const re = []
        function sum(root,arr){
            if(root == null){
                return null
            }
            arr.push(root.val)
            const left =  sum(root.left,[...arr])
            const right =  sum(root.right,[...arr])
            if(left === null && right === null){
                const sum =  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                if(sum == target){
                    re.push(arr)
                }
                // res.push(path)
               } 
            // this.pathsum(root.left)
            // this.pathsum(root.left)
        }
        sum(root,[])
        return re

    }

    hasPathSum(root,targetSum){
            const re = []
            let check = false
            function traverse(root, arr){
                if(root == null){
                   return null
                  }
                  arr.push(root.val)
                      const left =  traverse(root.left,[...arr])
                      const right =  traverse(root.right,[...arr])
                if(right === null && left === null){
                      const sum =  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                      if(sum == targetSum){
                         check=true
                         }
                   }
            }
            traverse(root,[])
        return check
    }
    // https://leetcode.com/problems/sum-root-to-leaf-numbers/
    sumNumbers(root){
        let arr= []
        function traverse(root,path){
            if(root === null){
                return null
            }
            path = path+(root.val)
            const left = traverse(root.left,path)
            const right = traverse(root.right,path)
            if(left === null && right === null){
                arr.push(Number(path))
            }
            return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
        return (traverse(root,''))
    }

}
// const arr = [8,5,3,1,4,6,10,11,14]
// const arr = [2,1,3]
const arr = [10,5,-3,3,2,null,11,3,-2,null,1]
const bst = new BinarySearchTree()
bst.addHelper(arr,bst)
// const paths = bst.binaryTreePaths(bst.head)
// paths
bst.head
const sum = bst.pathsum2(bst.head,8)

sum
// const flag = bst.search(bst.head,100)
//   flag