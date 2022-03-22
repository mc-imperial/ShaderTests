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

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
struct BinarySearchObject {
 int prime_numbers[10];
} ;

void main()
{
 BinarySearchObject obj = BinarySearchObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
 for(int i = 1; i < 10; i ++)
  {
   if(i == 1)
    {
    }
   else
    {
     do
      {
       if(i == 7)
        {
        }
       else
        {
         do
          {
           if(i == 8)
            {
             obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
            }
           else
            {
            }
          }
         while(1.0 > injectionSwitch.y);
        }
      }
     while(1.0 > injectionSwitch.y);
    }
  }
 if(obj.prime_numbers[1] != 1)
  {
  }
 else
  {
   discard;
  }
}
