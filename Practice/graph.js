class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex]  = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }

   display(){
    for(let vertex in this.adjacentList){
        console.log(vertex+"->"+[...this.adjacentList[vertex]])
    }
   }
    hasEdge(vertex1,vertex2){
        return (this.adjacentList[vertex1].has(vertex2)&&this.adjacentList[vertex2].has(vertex1))
    }

    deleteEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }

    deleteVertex(vertex){
        if(!this.adjacentList[vertex]){
            return null
        }
        for(let adjacentVertex in this.adjacentList){
            this.deleteEdge(adjacentVertex,vertex)
        }
        delete this.adjacentList[vertex]
    }

    dfs(startedVertex,visited = {}){
        if(!this.adjacentList[startedVertex]) return
        console.log(startedVertex)
        visited[startedVertex]= true
        for(let neighbor of this.adjacentList[startedVertex]){
            if(!visited[neighbor]){
                this.dfs(neighbor,visited)
            }
        }
    }

    bfs(startedVertex){
        const queue = [startedVertex]
        const visited = {[startedVertex]:true}
        while(queue.length>0){
            let curr  = queue.shift()
            console.log(curr)
            for(let neighbor of this.adjacentList[curr]){
                if(!visited[neighbor]){
                    visited[neighbor]= true
                    queue.push(neighbor)
                }
            }
        }
    }

}

const graph = new Graph()
graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("B","A")
graph.display()
graph.bfs('A')
graph.dfs('A')