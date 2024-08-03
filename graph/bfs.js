

import graph from "./graph.js";
console.log(graph)


class BFS{
    constructor(){
        this.queue = []
        this.visited = []
    }

    traverse(startingNode){
        this.queue.push(startingNode)        
        this.visited[startingNode] = true
        while(this.queue.length >  0){
            const elm = this.queue.shift()
            console.log(elm)

            const neightbours = graph['hash'][elm]
            for(let i = 0;i<neightbours.length;i++){
                const neightbour = neightbours[i]['dest']
                if(!this.visited[neightbour]){
                    this.queue.push(neightbour)
                    this.visited[neightbour] = true
                }
            }
        }
    }
}

const bfs = new BFS()
bfs.traverse(0)