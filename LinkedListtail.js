class Node{
    constructor(value){
        this.value = value
        this.next= null
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
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
            this.tail = node
        }
        this.size++
    }

    insert(value,index){
        if(index<0 || index >= this.size){
            console.log('invalid');
            return
        }if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }       
    }

    removeFromStart(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size===1){
            this.head ===null
            this.tail === null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            console.log("invalid index");
            return null
        }
        let removeNode 
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next 
        }
        this.size--
        return removeNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            console.log('this list is empty');
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !==value){
               prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }else{
                return null
            }
        }
    }



    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head
             let listValues = ''

            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }

    }
}

const list = new LinkedList()
list.append(10)
list.prepend(11)
list.append(9)
list.prepend(12)
list.insert(13,0)
list.removeValue(13)
list.removeFrom(0)
list.removeFromEnd()
list.removeFromStart()
list.print()
console.log(list.getSize())
console.log(list.isEmpty())