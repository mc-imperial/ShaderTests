#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST tree[10] = BST[10](BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1));

void makeTreeNode(inout BST tree)
{
 tree.rightIndex = 1;
}
void main()
{
 int treeIndex = 1;
 treeIndex = int(injectionSwitch.x) | 1;
 makeTreeNode(tree[treeIndex]);
 if(tree[1].leftIndex == 1)
  {
   makeTreeNode(tree[1]);
  }
 else
  {
  }
}
