class Node{
    constructor(value){
        this.value= value
        this.next= null
        this.prev = null
    }
}


class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node            
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev= this.tail
            this.tail = node        
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }else{
            const value = this.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.value
        if(this.size===1){
            this.tail= null
            this.head= null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return value
    }

    remove(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let curr = this.head
            while(curr.next && curr.next.value !== value){
                curr = curr.next
           }
           if(curr.next){
            let removeNode = curr.next
            curr.next = removeNode.next
            this.size -- 
            return value
           }
           return null
        }
    }

    insert(value,index){
        const node = new Node(value)
        if(index<0 || index > this.size){            
            return -1
        }
        if(index===this.size){
            this.append(value)
        }else if(index===0){
            this.prepend(value)
        }else{
            let curr = this.head
            for(let i = 0 ; i< index-1 ; i++){
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            node.prev = curr
            node.next.prev = node
        }

      
    }

    print(){
        if(this.isEmpty()){
            console.log("the list is empty")
        }else{
            let curr = this.head
            let list = ''
            while(curr){
                list +=`${curr.value} ` 
                curr=curr.next
            }
            console.log(list)
        }
    }

    printReverse(){
        if(this.isEmpty()){
            console.log("this list is empty")
        }else{
            let curr = this.tail
            let list = ''
            while(curr){
                list += `${curr.value} `
                curr = curr.prev
            }
            console.log(list)
        }
    }
}

const list = new doublyLinkedList()
console.log(list.isEmpty())
list.append(10)
list.prepend(9)
list.prepend(8)
list.append(11)
// list.removeFromEnd()
// list.removeFromFront()
list.print()
list.printReverse()

console.log(list.isEmpty())
// list.print()