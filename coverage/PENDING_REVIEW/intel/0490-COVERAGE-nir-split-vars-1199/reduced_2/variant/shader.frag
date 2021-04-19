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

struct GLF_dead0BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead0BST GLF_dead0tree[10];

void GLF_dead0makeTreeNode(inout GLF_dead0BST GLF_dead0tree, int GLF_dead0data)
{
 if(gl_FragCoord.x < 1.0)
  {
   return;
  }
 GLF_dead0tree.data = GLF_dead0data;
}
precision highp float;

precision highp int;

int index;

void main()
{
 GLF_dead0makeTreeNode(GLF_dead0tree[_GLF_MAKE_IN_BOUNDS_INT(index, 10)], index);
}
