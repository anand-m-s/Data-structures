class Node{
    constructor(value){
        this.value = value
        this.left  = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root ===null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
             this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,node){
        if(root.value<node.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }


    search(root,value){
        if(!root){
            return false
        }if(root.value===value){
            return true
        }else if(value<root.value){
            this.search(root.left,value)
        }else{
            this.search(root.right,value)
        }
        return false
    }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(20)
bst.insert(30)
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,11))