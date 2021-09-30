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

int MATRIX_N = 1;

void main()
{
 MATRIX_N = 4;
 vec4 matrix_b = vec4(1.0);
 for(int i = MATRIX_N; i >= 1; i --)
  {
   for(int j = MATRIX_N; j >= 1; j --)
    {
     matrix_b[_GLF_MAKE_IN_BOUNDS_INT(i, 4)] -= 1.0;
     if(gl_FragCoord.x < 1.0)
      {
       continue;
      }
     MATRIX_N += 1;
     break;
    }
  }
}
