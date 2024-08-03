import graph from "./graph.js";
console.log(graph)

class Src{
    exec(src,target){
        const arr = []
        const visited = []
        this.traverse(src,target,'',arr,visited)
        return arr
    }
    traverse(current,target,path,arr,visited){
        path = (path == '') ? path + current : (path+'->'+current)
        // visited[current] = true
        // const localVisited = [...visited]
        // localVisited[current] = true
        if(current == target){
            arr.push(path)
            return
        }
        const edgeList = graph.hash[current]
        // get all neightbours
        for(let i=0;i<edgeList.length;i++){
            const neightbour = edgeList[i]['dest']
            if(!visited[neightbour]){
                visited[current]=true
                this.traverse(neightbour,target,path,arr,visited)
                visited[current] =false
                // visited[]

                 
            }
        }
    }
}

const src = new Src()
console.log(src.exec(0,5))