function validPath(n, edges, source, destination) {
    // Build the adjacency list
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
  
    // DFS function
    function dfs(node, visited) {
      if (node === destination) return true;
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, visited)) return true;
        }
      }
      return false;
    }
  
    // Start DFS from the source
    return dfs(source, new Set());
  }
  
  console.log(validPath(10,[[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]],7,5))