class Heap{
    constructor(){

        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){
        return Math.floor(2*index+1)
    }
    getRightChildIndex(index){
        return Math.floor(2*index+2)
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)
        if(parentIndex>=0 && this.heap[parentIndex]>this.heap[index]){
            this.swap(parentIndex,index)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index){
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)
        let minIndex = index
        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[minIndex]){
            minIndex = leftChildIndex
        }if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[minIndex]){
            minIndex = rightChildIndex
        }
        if(minIndex!==index){
            this.swap(minIndex,index)
            this.heapifyDown(minIndex)
        }
        
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        if(this.heap.length===0){
            return null
        }if(this.heap.length===1){
            return this.heap.pop()
        }
        let min = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    heapSort(){
        const sortedArray = []
        while(this.heap.length>0){
            sortedArray.push(this.remove())
        }
        return sortedArray
    }

    buildFromArray(arr){
        this.heap = arr
        const firstNonLeafIndex=Math.floor((arr.length-2)/2)
        for(let i=firstNonLeafIndex;i>=0;i--){
            this.heapifyDown(i)
        }
    }
}

const minHeap = new Heap()
minHeap.buildFromArray([12,34,21,45,23,1,3,2,55,12])

console.log(minHeap.heap)
minHeap.remove()
console.log(minHeap.heap)
minHeap.insert(1)
console.log(minHeap.heap)
console.log(minHeap.heapSort())