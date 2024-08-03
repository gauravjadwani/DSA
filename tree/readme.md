
Initial call: bst.add(bst.head, 5)
   |
   v
add(null, 5) -> creates Node(5) and returns Node(5) to bst.head
   |
   v
Next call: bst.add(bst.head, 1)
   |
   v
add(Node(5), 1) -> calls add(root.left, 1)
   |
   v
   add(null, 1) -> creates Node(1) and returns Node(1) to root.left of Node(5)
   |                                |
   |                                v
   |----------------------------- Node(5) returns itself to bst.head
                                       |
                                       v
Next call: bst.add(bst.head, 3)
                                       |
                                       v
                                   add(Node(5), 3) -> calls add(root.left, 3)
                                       |
                                       v
                                   add(Node(1), 3) -> calls add(root.right, 3)
                                       |
                                       v
                                   add(null, 3) -> creates Node(3) and returns Node(3) to root.right of Node(1)



 */
