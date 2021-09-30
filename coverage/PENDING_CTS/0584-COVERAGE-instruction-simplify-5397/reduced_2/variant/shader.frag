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

int GLF_dead3data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

precision highp int;

precision highp float;

void main()
{
 if(true)
  {
   int GLF_dead3i = 1;
   GLF_dead3data[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead3i, 0, 10 - 1), 10)] = 1;
  }
 fract(vec2(1.0) - trunc(float(GLF_dead3data[1])));
}
