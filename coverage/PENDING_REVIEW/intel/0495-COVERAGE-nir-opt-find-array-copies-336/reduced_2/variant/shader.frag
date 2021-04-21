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

int GLF_live13data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), GLF_live13temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

precision highp int;

precision highp float;

void main()
{
 for(int k = 1; true; 1)
  {
   int GLF_live13_looplimiter3 = 1;
   for(int GLF_live13i = 1; true; 1)
    {
     if(GLF_live13_looplimiter3 >= 1)
      {
       break;
      }
     GLF_live13_looplimiter3 ++;
     int GLF_live13_looplimiter2 = 1;
     for(int GLF_live13i = 1; GLF_live13i <= 2; GLF_live13i ++)
      {
       if(GLF_live13_looplimiter2 >= 5)
        {
         break;
        }
       GLF_live13_looplimiter2 ++;
       GLF_live13data[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_live13i, 0, 10 - 1), 10)] = GLF_live13temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live13i, 10)];
      }
    }
   int GLF_live13_looplimiter2 = 1;
   for(int GLF_live13i = 1; true; 1)
    {
     if(GLF_live13_looplimiter2 >= 5)
      {
       break;
      }
     GLF_live13_looplimiter2 ++;
     GLF_live13data[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_live13i, 0, 10 - 1), 10)] = GLF_live13temp[1];
    }
   for(int GLF_live7rows = 1; true; 1)
    {
     int GLF_live13_looplimiter6 = 1;
     for(int GLF_live13j = 0; true; GLF_live13j ++)
      {
       if(GLF_live13_looplimiter6 >= 5)
        {
         break;
        }
       GLF_live13_looplimiter6 ++;
       GLF_live13temp[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_live13j, 0, 10 - 1), 10)] = GLF_live13data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live13j, 10)];
      }
    }
  }
}
