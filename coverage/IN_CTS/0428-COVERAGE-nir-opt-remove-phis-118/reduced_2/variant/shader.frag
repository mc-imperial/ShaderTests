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

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

void insert()
{
 int baseIndex;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(1 <= BST[10](BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1))[_GLF_MAKE_IN_BOUNDS_INT(baseIndex, 10)].data)
    {
     if(true)
      {
       return;
      }
     else
      {
       baseIndex = 1;
      }
    }
   else
    {
     if(true)
      {
       return;
      }
     else
      {
      }
    }
  }
}
void main()
{
 insert();
}
