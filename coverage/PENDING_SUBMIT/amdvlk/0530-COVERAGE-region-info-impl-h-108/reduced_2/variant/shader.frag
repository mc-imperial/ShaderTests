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

void main()
{
 vec3 c = vec3(1.0);
 c.y = gl_FragCoord.y;
 if(gl_FragCoord.x < 1.0)
  {
   for(int GLF_dead7i = 1; true; 1)
    {
    }
  }
 for(int i = 1; i < 3; i ++)
  {
   if(c[_GLF_MAKE_IN_BOUNDS_INT(i, 3)] >= 1.0)
    {
     c[_GLF_MAKE_IN_BOUNDS_INT(i, 3)] = c[1] * c[1];
    }
  }
}
