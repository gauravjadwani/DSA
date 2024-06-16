
class Node{
    constructor(value,previous=null,next=null){
      this.previous=previous
      this.next=next
      this.value=value
    }
  }
  
  class DoubleLinkList{
    constructor(){
      this.head = null
    }
    insertlast(value){
      const node = new Node(value)
  
      if(this.head){
        let head = this.head
        while(head.next){
          head = head.next
        }
        head.next = node
        node.previous = head
      }else{
        this.head = node
      }
    }
    reverse(){
       let head = this.head
        
    }
  }
  
  const dl = new DoubleLinkList()
  dl.insertlast(1)
  dl.insertlast(2)
  dl.insertlast(3)
  dl.insertlast(4)
  dl.insertlast(5)
  console.log((dl))