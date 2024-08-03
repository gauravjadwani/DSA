

// class Path{
//     constructor(source,dest,weight){
//         this.source = source
//         this.dest = dest
//         this.weight = weight
//     }
// }

// class Graph{
//     constructor(){
//         this.gList=[]
//     }
//     add(){
//         // const gList = []
//         const p1= new Path(2,0) 
//         const p2= new Path(2,3)
//         const p3= new Path(3,2) 
//         const p4= new Path(3,1) 
//         const p5= new Path(1,3)
//         const p6= new Path(1,2)
//         const p7= new Path(0,2) 
//         this.gList[0] = []
//         this.gList[0].push(p7)
//         this.gList[1]= []
//         this.gList[1].push(p5)
//         this.gList[1].push(p6)
//         this.gList[2]= []
//         this.gList[2].push(p1)
//         this.gList[2].push(p2)
//         this.gList[3]= []
//         this.gList[3].push(p3)
//         this.gList[3].push(p4)
//         return this.gList
//     }
//     traverse(startigNode){
//         const queue = []
//         queue.push(startigNode)
//         const visited = new Array(this.gList.length).fill(false);
//         visited[startigNode] = true;
//         while(queue.length > 0){
//             const vertex = queue.shift();
//             console.log(vertex);

//             for(let i=0;i<this.gList[vertex].length;i++){
//                 const des = this.gList[vertex][i].dest
//                 if(!visited[des]){
//                     visited[des] = true
//                     queue.push(des)
//                 }
//             }
//         }
//     }
//     traverseBFS(startingPoint){
//         const queue = []
//         queue.push(startingPoint)
//         const traversed = new Array(this.gList.length).fill(false)
//         while(queue.length > 0){
//             const vertex = queue.shift()
//             // const des = node[]
//             for(let i=0;i<this.gList[vertex].length;i++){
//                 const des = this.gList[vertex][i]['dest']
//                 if(!visited[des]){
//                     visited[des] = true
//                     queue.push(des)
//                 }

//             }
//         }
//     }
// }
// const g = new Graph()
// g.add()
// // g.traverse(0)
// g.traverse(1)
// // console.log(g.add())