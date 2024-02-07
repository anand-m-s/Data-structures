class Node{
    constructor(){
        this.children ={}
        this.isWordEnd = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!curr.children.hasOwnProperty(char)){
                curr.children[char]= new Node()
            }
            curr = curr.children[char]
        }
        curr.isWordEnd = true
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
        return curr.isWordEnd;
    }

    startWithPrefix(prefix){
        let curr = this.root
        for(let i =0;i<prefix.length;i++){
            let char = prefix[i]
            if(!curr.children.hasOwnProperty(char)){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }
    displayTrie() {
        return this.display(this.root, "")
    }

    display(node, curr) {
        if (node.isWordEnd) {
            console.log(curr);
        }
        for (const char in node.children) {
            if (node.children.hasOwnProperty(char)) {
                this.display(node.children[char], curr + char)
            }

        }
    }
}

const trie = new Trie()
trie.insert("apple")
trie.insert("app")
console.log(trie.contains("apple"));
console.log(trie.contains('applesdf'));
trie.displayTrie()
