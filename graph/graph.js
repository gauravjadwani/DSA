

class Path{
    constructor(src,dest,weight){
        this.src=src
        this.dest=dest
        this.weight=weight
    }
}
class Graph{
    constructor(){
        this.hash={}
    }
    add(src,dest,weight=0){
        const path = new Path(src,dest,weight)
        if(!this.hash[src]){
            this.hash[src] = []
        }
        this.hash[src].push(path)
    }
    buildGraph(){
        this.add(0,2,0)
        this.add(1,2,2)
        this.add(1,3,3)
        this.add(2,0,0)
        this.add(2,1,1)
        this.add(2,3,3)
        this.add(3,1,1)
        this.add(3,2,2)

        // this.add(0,1,0)
        // this.add(0,2,0)
        // this.add(1,0,0)
        // this.add(1,3,0)
        // this.add(2,0,0)
        // this.add(2,4,0)
        // this.add(3,1,0)
        // this.add(3,4,0)
        // this.add(3,5,0)
        // this.add(4,2,0)
        // this.add(4,3,0)
        // this.add(4,5,0)
        // this.add(5,3,0)
        // this.add(5,4,0)
        // this.add(5,6,0)
        // this.add(6,5,0)


        // this.add(0,1,0)
        // this.add(0,9,0)
        // this.add(1,2,0)
        // this.add(1,3,0)
        // this.add(1,4,0)
        // this.add(1,0,0)
        // this.add(2,1,0)
        // this.add(2,5,0)
        // this.add(3,6,0)
        // this.add(3,4,0)
        // this.add(3,1,0)
        // this.add(4,1,0)
        // this.add(4,3,0)
        // this.add(5,7,0)
        // this.add(5,8,0)
        // this.add(5,2,0)
        // this.add(6,3,0)
        // this.add(7,5,0)
        // this.add(8,5,0)
        // this.add(9,0,0)


        // this.add(0,1)
        // this.add(0,2)
        // this.add(0,3)
        // this.add(1,0)
        // this.add(2,0)
        // this.add(2,4)
        // this.add(3,0)
        // this.add(4,2)
        // this.add(0,3)



    }
}
const graph = new Graph()
graph.buildGraph()
export default graph
// console.log(JSON.stringify(graph))