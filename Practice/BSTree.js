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

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left ==null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right =node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(root===null){
            return false
        }if(root.value ===value){
            return true
        }
        else if(root.value>value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
        return this.max(root.right)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    delete(value){
        return this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root ===null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.right&& !root.left){
                return null
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    bfs(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    isBst(){
        return this.isValid(this.root,-Infinity,Infinity)
    }
    isValid(node,min,max){
        if(!node){
            return true
        }if(node.value>max ||node.value<min){
            return false
        }return (this.isValid(node.left,min,node.value)&& this.isValid(node.right,node.value,max))
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(40)
bst.insert(11)  
bst.insert(6)
console.log(bst.search(bst.root,11));
console.log(bst.search(bst.root,1112));
bst.delete(6)
bst.bfs()
console.log(bst.isBst());
