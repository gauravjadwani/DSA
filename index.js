class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  class linklist {
    constructor(){
      this.head = null
    }
    insertLast(elm){
      let current = this.head
      console.log('current',current)
      while(current && current.next){
        current = current.next
      }
      const node = new Node(elm)
      if(current == null){
        this.head = node
      }else{
        console.log('else',current)
        current.next = node
      }
    }
    reverse(){

        let current = this.head
        let previous =null

        while(current){
            const temp = current.next
            current.next = previous
            previous = current
            current = temp
        }
        current
        console.log('fefe',current)
    }
  }
  const link = new linklist()
  link.insertLast(1)
  link.insertLast(2)
  link.insertLast(3) 
  link.insertLast(4)
  link.insertLast(5)

  console.log(link)
  link.reverse()
