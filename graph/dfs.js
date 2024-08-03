

import graph from "./graph.js";
console.log(graph)

class Dfs{
    constructor(){

    }
    traverse(startingNode){
        const visited = {}
        this.dfs(startingNode,visited)
    }
    dfs(startingNode,visited){
        // if(!visited[startingNode]){
        //     console.log(startingNode)
        //     visited[startingNode] = true
        // }
        console.log(startingNode)
        visited[startingNode] = true

        const currentList = graph.hash[startingNode]
        // if(!currentList){
        //     return startingNode
        // }
        for(let i=0;i<currentList.length;i++){
            // const current=currentList[i]['src']
            const dest = currentList[i]['dest']

            if(!visited[dest]){
                this.dfs(dest,visited)
            }
        }
    }
}
const d = new Dfs()
d.traverse(0)

