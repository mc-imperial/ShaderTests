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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST tree[10] = BST[10](BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1));

void makeTreeNode(inout BST tree)
{
 if(injectionSwitch.x > injectionSwitch.y)
  {
   return;
  }
 if(gl_FragCoord.y < 1.0)
  {
   return;
  }
 tree.rightIndex = 1;
}
void main()
{
 makeTreeNode(tree[1]);
 bool insert_has_returned = true;
 insert_has_returned = false;
 if(injectionSwitch.x > injectionSwitch.y)
  {
   insert_has_returned = true;
  }
 if(! insert_has_returned)
  {
   int baseIndex = 1;
   baseIndex = 0;
   while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
    {
     _GLF_global_loop_count ++;
     tree[_GLF_MAKE_IN_BOUNDS_INT(baseIndex, 10)].rightIndex = 1;
     makeTreeNode(tree[1]);
    }
  }
}
