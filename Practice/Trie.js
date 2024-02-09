// class Node{
//     constructor(){
//         this.children = {}
//         this.isWordEnd = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node()
//     }

//     insert(word){
//         let curr = this.root
//         for(let i=0;i<word.length;i++){
//             const char = word[i]
//             if(!curr.children.hasOwnProperty(char)){
//                 curr.children[char]= new Node()
//             }
//             curr = curr.children[char]
//         }
//         curr.isWordEnd = true
//     }

//     contains(word){
//         let curr = this.root
//         for(let i =0;i<word.length;i++){
//             const char = word[i]
//             if(!curr.children.hasOwnProperty(char)){
//                 return false
//             }
//             curr = curr.children[char]
//         }
//         return curr.isWordEnd
//     }

//     startWithPrefix(prefix){
//         let curr = this.root
//         for(let i=0;i<prefix.length;i++){
//             const char = prefix[i]
//             if(!curr.children.hasOwnProperty(char)){
//                 return false
//             }
//             curr = curr.children[char]
//         }
//         return true
//     }

//     displayTrie(){
//         this.displayhelper(this.root,"")
//     }

//     displayhelper(node,currentString){
//         if(node.isWordEnd){
//             console.log(currentString)
//         }
//         for(let char in node.children){
//             if(node.children.hasOwnProperty(char)){
//                 this.displayhelper(node.children[char],currentString+char)
//             }
//         }
//     }


// }

// const trie = new Trie()
// trie.insert("Apple")
// trie.insert("Mushroom")
// trie.insert("Mud")
// console.log(trie.contains("Apple"))
// console.log(trie.startWithPrefix("Appls"))
// trie.displayTrie()

class Node{
    constructor(){
        this.children = {}
        this.isWordEnd = false
    }
}

class Trie{
    constructor(){
        this.root =new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!curr.children.hasOwnProperty(char)){
                curr.children[char]=new Node()
            }
            curr = curr.children[char]
        }       
        curr.isWordEnd =true
    }
    contains(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!curr.children.hasOwnProperty(char)){
                return false
            }
            curr = curr.children[char]
        }
        return curr.isWordEnd
    }
    startWithPrefix(word){
        let curr = this.root
        for(let i =0;i<word.length;i++){
            let char = word[i]
            if(!curr.children.hasOwnProperty(char)){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }

    display(){
        return this.displayHelper(this.root,"")
    }
    displayHelper(node,curr){
        if(node.isWordEnd){
          console.log(curr)
        }
        for(let char in node.children){
            if(node.children.hasOwnProperty(char)){
                this.displayHelper(node.children[char],curr+char)
            }
        }
    }

    delete(word){
        if(!this.contains(word)){
            console.log(`The word ${word} is not found in the tree`)
            return
        }
        this.deleteHelper(this.root,word,0)
    }

    deleteHelper(node,word,index){
        if(index===word.length){
            node.isWordEnd = true
            return
        }
        const charToDelte = word[index]
        const nextNode = node.children[charToDelte]
        this.deleteHelper(nextNode,word,index+1)
        if (Object.keys(nextNode.children).length === 0 && !nextNode.isWordEnd) {
            delete node.children[charToDelete];
        }
    }

}
const trie = new Trie()
trie.insert("Mushroom")
trie.insert("Minigoa")
trie.insert("enchanment")
trie.display()