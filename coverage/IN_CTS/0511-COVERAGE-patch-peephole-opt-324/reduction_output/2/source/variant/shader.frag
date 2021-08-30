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
#define _int_4 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]
#define _int_0 _GLF_uniform_int_values[4]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [4, 1, 2, 3, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 v = vec4(_int_1, _int_2, _int_3, _int_4);
 for(int i = _int_0; (i < _int_4) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(mat4(v, v, v, v)[0][_GLF_MAKE_IN_BOUNDS_INT(i, 4)] > _float_1_0)
    {
     v[_GLF_MAKE_IN_BOUNDS_INT(i, 4)] = clamp(v, vec4(_float_0_0), vec4(_float_1_0))[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 4)];
    }
  }
 if(v == vec4(_int_1))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
