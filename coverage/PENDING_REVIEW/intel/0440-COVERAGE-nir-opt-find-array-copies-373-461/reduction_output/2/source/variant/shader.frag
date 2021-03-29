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
#define _float_3_0 _GLF_uniform_float_values[0]
#define _float_4_0 _GLF_uniform_float_values[1]
#define _float_1_0 _GLF_uniform_float_values[2]
#define _float_2_0 _GLF_uniform_float_values[3]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [3.0, 4.0, 1.0, 2.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_1;
 vec4 v = vec4(_float_1_0);
 mat3x4 m = mat3x4(_float_2_0);
 m[_GLF_MAKE_IN_BOUNDS_INT(a, 3)][_GLF_MAKE_IN_BOUNDS_INT(a, 4)] = _float_3_0;
 v[_GLF_MAKE_IN_BOUNDS_INT(a, 4)] += mat4(m)[_GLF_MAKE_IN_BOUNDS_INT(a, 4)][_GLF_MAKE_IN_BOUNDS_INT(a, 4)];
 if(v.y == _float_4_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
