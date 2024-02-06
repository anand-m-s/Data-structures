class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left === null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right === null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        } if (root.value === value) {
            return true
        } else if (value > root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    BFS() {
        let queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            } if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.preOrder(root.left)
            console.log(root.value);
            this.preOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        } if (value < root.value) {
            this.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            this.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    isBST(){
        return this.isValid(this.root,-Infinity,Infinity)
    }

    isValid(node,min,max){
        if(!node){
            return true
        }
        if(node.value<min || node.value >max){
            return false
        }
        return(this.isValid(node.left,min,node.value)&&
        this.isValid(node.right,node.value,max))
    }



}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(12)
bst.insert(7)
bst.insert(25)
console.log(bst.search(bst.root, 10));
bst.delete(10)

console.log(bst.isBST());
bst.postOrder(bst.root)
