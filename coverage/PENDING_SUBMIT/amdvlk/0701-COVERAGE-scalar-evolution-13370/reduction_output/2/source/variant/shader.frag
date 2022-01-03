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
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 ivec4 v = ivec4(_int_1);
 if(one == 1)
  {
   for(int i = 2; (i >= 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); i --)
    {
     _GLF_global_loop_count ++;
     for(int j = _int_2; (j >= i) && (_GLF_global_loop_count < _GLF_global_loop_bound); j --)
      {
       _GLF_global_loop_count ++;
       v[_GLF_MAKE_IN_BOUNDS_INT(i, 4)] --;
      }
    }
  }
 if(v == ivec4(_int_1, - _int_1, _int_0, _int_1))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
