class heap {
    constructor() {
        this.heap = []
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    getLeftChild(index) {
        return Math.floor(2 * index + 1)
    }
    getRightChild(index) {
        return Math.floor(2 * index + 2)
    }

    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2)
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {

            this.swap(parentIndex, index)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index) {
        const leftChildIndex = this.getLeftChild(index)
        const rightChildIndex = this.getRightChild(index)
        let minIndex = index
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex
        }
        if (minIndex !== index) {
            this.swap(index, minIndex)
            this.heapifyDown(minIndex)
        }

    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    remove() {
        if (this.heap.length === 0) {
            return null
        } if (this.heap.length === 1) {
            return this.heap.pop()
        }
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    heapSort() {
        const sortedArray = []
        while (this.heap.length > 0) {
            sortedArray.push(this.remove())
        }
        return sortedArray;
    }

    // function to build heap from an array
    buildHeapFromArray(array) {
        this.heap = array;

        const firstNonLeafIndex = Math.floor((array.length - 2) / 2);

        for (let i = firstNonLeafIndex; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

const minHeap = new heap()
minHeap.insert(10)
minHeap.insert(43)
minHeap.insert(4)
minHeap.insert(2)
minHeap.insert(23)
minHeap.insert(42)
minHeap.insert(1)


console.log(minHeap.heap);
// console.log(minHeap.heapSort());


// class minHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }
//     getLeftChild(index){
//         return Math.floor(index*2+1)
//     }
//     getRightChild(index){
//         return Math.floor(index*2+2)
//     }

//     swap(index1,index2){
//         let temp = this.heap[index1]
//         this.heap[index1]= this.heap[index2]
//         this.heap[index2]= temp
//     }

//     insert(value){
//     this.heap.push(value)
//     this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//     let parentIndex = this.getParentIndex(index)
//     if(parentIndex>=0 && this.heap[parentIndex]>this.heap[index]){
//         this.swap(parentIndex,index)
//         this.heapifyUp(parentIndex)
//     }
//     }

//     remove(){
//         if(this.heap.length===0){
//             return null
//         }if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         let min = this.heap[0]
//         this.heap[0]= this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }

//     heapifyDown(index){
//     const leftChildIndex = this.getLeftChild(index)
//     const rightChildIndex = this.getRightChild(index)
//     let minIndex = index
//     if(this.leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[minIndex]){
//         minIndex = leftChildIndex
//     }if(this.rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[minIndex]){
//         minIndex = rightChildIndex
//     }
//     if(minIndex!==index){
//         this.swap(minIndex,index)
//         this.heapifyDown(minIndex)
//     }
//     }

//     heapSort(){
//         let sortedArray = []
//         while(this.heap.length>0){
//             sortedArray.push(this.remove())
//         }
//         return sortedArray
//     }



// }