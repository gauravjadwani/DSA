
class Edge{
    constructor(source=null,dest=null,weight=null){
        this.source = source
        this.dest =  dest
        this.weight = weight
    }
}

class Graph{
    constructor(){
        this.list = []
    }
    add(source,destination,weight){
        const edge = new Edge(source,destination,weight)
        if(!this.list[source]){
            this.list[source] = []
        }
        this.list[source].push(edge)
    }
    traverse(startingNode){
        const visited = {}
        const queue = []
        queue.push(startingNode)
        visited[startingNode]=true
        while(queue.length > 0){
            const elm = queue.shift()
            console.log(elm)

            for(let i=0;i<this.list[elm].length;i++){
                const el = this.list[elm][i]['dest']
                if(!visited[el]){
                    queue.push(el)
                    visited[el]=true
                }
            }
        }
    }
}

// const p1= new Path(2,0) 
// const p2= new Path(2,3)
// const p3= new Path(3,2) 
// const p4= new Path(3,1) 
// const p5= new Path(1,3)
// const p6= new Path(1,2)
// const p7= new Path(0,2)

const graph = new Graph()
graph.add(0,2,0)
graph.add(1,2,2)
graph.add(1,3,3)
graph.add(2,0,0)
graph.add(2,1,1)
graph.add(2,3,3)
graph.add(3,1,1)
graph.add(3,2,2)
console.log(JSON.stringify(graph))
graph.traverse(0)
graph