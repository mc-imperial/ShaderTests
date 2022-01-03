#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER

precision highp float;

precision highp int;

struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST tree[10] = BST[10](BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1));

void makeTreeNode(inout BST tree)
{
 for(int _injected_loop_counter = 1; _injected_loop_counter > 0; _injected_loop_counter --)
  {
   tree.rightIndex = - 1;
  }
}
int search()
{
 BST currentNode = BST(1, 1, 1);
 int index = 1;
 index = 0;
 while(true)
  {
   currentNode = tree[_GLF_MAKE_IN_BOUNDS_INT(index, 10)];
   if(currentNode.data == 1)
    {
     return 1;
    }
   index = 1;
  }
 return 1;
}
void main()
{
 makeTreeNode(tree[1]);
 search();
}
