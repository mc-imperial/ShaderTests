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

struct GLF_live11QuicksortObject {
 int numbers[10];
} ;

GLF_live11QuicksortObject GLF_live11obj = GLF_live11QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

precision highp int;

precision highp float;

void main()
{
 int GLF_live11_looplimiter2 = 1;
 for(int GLF_live11i = 1; true; GLF_live11i ++)
  {
   if(GLF_live11_looplimiter2 >= 6)
    {
     break;
    }
   GLF_live11_looplimiter2 ++;
   GLF_live11obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_live11i, 0, 10 - 1), 10)] = int(0.42732108);
  }
 do
  {
  }
 while(1 != GLF_live11obj.numbers[1]);
}
