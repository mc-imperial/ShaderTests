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

struct GLF_dead11BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead11BST GLF_dead11tree[10] = GLF_dead11BST[10](GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1), GLF_dead11BST(1, 1, 1));

void GLF_dead11makeTreeNode(inout GLF_dead11BST GLF_dead11tree)
{
}
precision highp int;

precision highp float;

void main()
{
 uint matrix_number = 1u;
 matrix_number = 0u;
 int donor_replacementGLF_dead11baseIndex = 1;
 donor_replacementGLF_dead11baseIndex = ((1u % matrix_number) < 1u) ? 1 : 1;
 GLF_dead11tree[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead11baseIndex, 0, 10 - 1), 10)].leftIndex = 1;
 GLF_dead11makeTreeNode(GLF_dead11tree[1]);
}
