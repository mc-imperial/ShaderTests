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

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 matrix_b = vec4(1.0);
 for(int i = 1; i >= 0; i --)
  {
   matrix_b[_GLF_MAKE_IN_BOUNDS_INT(i, 4)] /= 1.0;
  }
 for(int _injected_loop_counter = 1; _injected_loop_counter > 0; _injected_loop_counter --)
  {
   for(int _injected_loop_counter = 1; _injected_loop_counter != 0; _injected_loop_counter --)
    {
     _GLF_color = matrix_b;
    }
  }
}
