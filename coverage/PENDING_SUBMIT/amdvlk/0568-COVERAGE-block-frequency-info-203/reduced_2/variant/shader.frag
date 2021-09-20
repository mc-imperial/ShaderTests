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

struct GLF_live7BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

int GLF_live7search()
{
 GLF_live7BST GLF_live7currentNode = GLF_live7BST(1, 1, 1);
 int GLF_live7index = 1;
 int GLF_live7_looplimiter1 = 1;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(GLF_live7_looplimiter1 >= 6)
    {
     break;
    }
   GLF_live7_looplimiter1 ++;
   GLF_live7currentNode = GLF_live7BST[10](GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1), GLF_live7BST(1, 1, 1))[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7index, 10)];
   if(GLF_live7currentNode.data == 1)
    {
     return 1;
    }
  }
 return 1;
}
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

struct BinarySearchObject {
 int prime_numbers[10];
} ;

void main()
{
 BinarySearchObject obj = BinarySearchObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
 for(int i = 0; (i < 10) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(i == 0)
    {
     obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
    }
   else
    {
     if(i == 1)
      {
       1.0 < float(GLF_live7search());
       float(GLF_live7search());
       obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
      }
     else
      {
       if(i == 4)
        {
         obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
        }
       else
        {
         discard;
        }
      }
    }
  }
 vec3 color = vec3(1.0);
 if(obj.prime_numbers[1] != 1)
  {
   color.yz -= 1.0;
  }
 else
  {
  }
 _GLF_color = vec4(color, 1.0);
}
