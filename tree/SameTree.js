import BST from './index.js'

class Same{
    re=true
    check(head1,head2){
    //     if(head1.val != head2.val){
    //         return this.re=false
    //     }
    //     if((head1.left && head2.left) && this.re){
    //         this.check(head1.left,head2.left)
    //     }else if(head1.left || head2.left){
    //         return this.re=false
    //     }
    //     if((head1.right && head2.right) && this.re){
    //         this.check(head1.right,head2.right)
    //     }
    //     return this.re
    // }

    if((!head1 && !head2) ){
            return this.re=true
    }
    if((head1 && !head2) || (!head1 && head2)||(head1.val !== head2.val)){
        return this.re=false
    }
    if((head1.left && head2.left) && this.re){
        isSameTree(head1.left,head2.left)
    }else if(head1.left || head2.left){
        return this.re=false
    }
    if((head1.right && head2.right) && this.re){
        isSameTree(head1.right,head2.right)
    }
    return this.re
    }
}

const bst1 = new BST()
bst1.insert(0)
// bst1.insert(15)
// bst1.insert(79)
// bst1.insert(90)
// bst1.insert(10)
const bst2 = new BST()
bst2.insert(0)
// bst2.insert(15)
// bst2.insert(79)
// bst2.insert(90)
// bst2.insert(10)
// bst2.insert(10)
console.log(BST)
const sm = new Same()
console.log('check',sm.check(bst1.head,bst2.head))