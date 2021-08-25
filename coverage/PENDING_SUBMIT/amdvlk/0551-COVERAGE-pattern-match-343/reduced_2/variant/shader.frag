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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct GLF_live3BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live3BST GLF_live3tree[10] = GLF_live3BST[10](GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1), GLF_live3BST(1, 1, 1));

void GLF_live3makeTreeNode(inout GLF_live3BST GLF_live3tree)
{
}
precision highp float;

precision highp int;

void main()
{
 int GLF_live3baseIndex = 1;
 GLF_live3baseIndex = GLF_live3tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live3baseIndex, 10)].rightIndex;
 ivec2 donor_replacementGLF_dead6pos = ivec2(1);
 donor_replacementGLF_dead6pos = (ivec2(1) & GLF_live3baseIndex) % (- 1);
 while((donor_replacementGLF_dead6pos.y != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
  }
 GLF_live3makeTreeNode(GLF_live3tree[1]);
}
