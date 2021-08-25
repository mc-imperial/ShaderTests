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

int search()
{
 BST currentNode = BST(1, 1, 1);
 int index = 1;
 index = 0;
 while(true)
  {
   currentNode = BST[10](BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1))[_GLF_MAKE_IN_BOUNDS_INT(index, 10)];
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
 for(int i = 1; i < 20; i ++)
  {
   search();
   int donor_replacementGLF_dead9sum_index = 1;
   donor_replacementGLF_dead9sum_index = i;
   float donor_replacementGLF_dead9sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
   for(int GLF_dead9cols = 1; GLF_dead9cols <= 4; GLF_dead9cols ++)
    {
     for(int GLF_dead9rows = 1; GLF_dead9rows <= 4; GLF_dead9rows ++)
      {
       donor_replacementGLF_dead9sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead9sum_index, 0, 9 - 1), 9)] = 1.0;
       switch(i)
        {
         case 0:
         donor_replacementGLF_dead9sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead9sum_index, 0, 9 - 1), 9)] += 1.0;
         case 8:
         donor_replacementGLF_dead9sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead9sum_index, 0, 9 - 1), 9)] += 1.0;
        }
       donor_replacementGLF_dead9sum_index ++;
      }
    }
  }
}
