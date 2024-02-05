class Node{
    constructor(value){
        this.value= value
        this.left = null
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
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }if(root.value === value){
            return true
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
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

     // Breadth First Search

     BFS() {
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }


    // Minimum value of the BS Tree
    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    // Maximum value of the BS Tree
    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
    
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            // Node with only one child or no child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
    
            // Node with two children: Get the inorder successor (smallest
            // in the right subtree)
            root.value = this.min(root.right);
    
            // Delete the inorder successor
            root.right = this.deleteNode(root.right, root.value);
        }
    
        return root;
    }
    

}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,15))
console.log(bst.search(bst.root,20))
bst.postOrder(bst.root)
// console.log('bst is empty', bst.isEmpty());