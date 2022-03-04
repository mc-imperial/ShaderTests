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

void main()
{
 vec4 matrix_b = vec4(1.0);
 for(int i = 1; (i >= 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); i --)
  {
   _GLF_global_loop_count ++;
   for(int j = 1; (j >= 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); j --)
    {
     _GLF_global_loop_count ++;
     matrix_b[_GLF_MAKE_IN_BOUNDS_INT(i, 4)] -= (mat4(1.0)[_GLF_MAKE_IN_BOUNDS_INT(i, 4)][1]);
    }
  }
}
