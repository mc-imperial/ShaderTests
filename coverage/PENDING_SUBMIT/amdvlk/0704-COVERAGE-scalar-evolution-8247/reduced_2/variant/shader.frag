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

struct GLF_dead9BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead9BST GLF_dead9tree[10] = GLF_dead9BST[10](GLF_dead9BST(1, 1, 30989), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1), GLF_dead9BST(1, 1, 1));

precision highp float;

precision highp int;

void main()
{
 GLF_dead9BST GLF_dead9currentNode = GLF_dead9BST(1, 1, 1);
 int GLF_dead9index = 1;
 GLF_dead9index = 0;
 while((GLF_dead9index != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   GLF_dead9currentNode = GLF_dead9tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead9index, 10)];
   GLF_dead9index = GLF_dead9currentNode.rightIndex;
  }
}
