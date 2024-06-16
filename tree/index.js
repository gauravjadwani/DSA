class Node{
    constructor(val,left=null,right=null){
        this.val = val
        this.right = right
        this.left = left   
    }
}

export default class BST{

    constructor(){
        this.head = null
        this.out = []
    }

    insert(value){
        const node = new Node(value)
        let head = this.head;
        if(!head){
            this.head = node
            return
        }
        while(true){
            if(head.val < value){
                if(head.right){
                    head = head.right
                }else{
                    head.right = node
                    break
                }

            }else if(head.val > value){
                if(head.left){
                    head =  head.left
                }else{
                    head.left = node
                    break
                }
                // head = head.left
            }
        }
    }
    preorder(root){
        // Root Left Right
        if(root === null) {
            return
        }
    
        out.push(root.value);
        root.left &&  preorder(root.left)
        root.right &&  preorder(root.right)
    }
    postorder(head){
        // let head = this.head;
        if(head.left){
            this.postorder(head.left)
        }
        if(head.right){
            this.postorder(head.right)
        }
        console.log(head.val)
    }
    preorder1(head){
        console.log(head.val)
        if(head.left){
            this.preorder1(head.left)
        }
        if(head.right){
            this.preorder1(head.right)
        }
    }
    inorder(head){

        if(head.left){
            this.inorder(head.left)
        }
        console.log(head.val)
        if(head.right){
            this.inorder(head.right)
        }
    }
    levelOrder(root) {
        const queue =[]
        if(root && root.val != undefined){
           queue.push(root)
        }
        while(queue.length > 0){
            const node = queue.shift();
            console.log(node.val)
            if(node.left){
                queue.push(node.left)
    
              }
            if(node.right){
                queue.push(node.right)
              }
        }
    };
    newlevelOrder(root) {
        const queue =[]
        const re = []
        if(root && root.val != undefined){
           queue.push(root)
        }
        while(queue.length > 0){
            const size = queue.length
            const temp = []
            for(let i =0;i<size;i++){
                const node = queue.shift();
                console.log(node.val)
                temp.push(node.val)
                if(node.left){
                    queue.push(node.left)
        
                }
                if(node.right){
                    queue.push(node.right)
                }
            }
            re.push(temp)
        }
        // console.log('result',re)
    };

    // checkTree(root) {
    //     const val = root.val
    //     console.log("left",)
    //     root && root.left && this.checkTree(root.left)
    //     console.log("right",)
    //     root && root.right && this.checkTree(root.right)
    //     console.log("main",val)
    //     return val
    // }

}
const bst = new BST()
bst.insert(10)
bst.insert(4)
bst.insert(6)
// console.log("fe",bst.checkTree(bst.head))
// bst.insert(90)
// bst.insert(10)
// bst.insert(55)
// bst.insert(12)
// bst.insert(20)
// bst.insert(50)
console.log(bst)
// bst.postorder(bst.head)
// bst.newlevelOrder(bst.head)
console.log('da')