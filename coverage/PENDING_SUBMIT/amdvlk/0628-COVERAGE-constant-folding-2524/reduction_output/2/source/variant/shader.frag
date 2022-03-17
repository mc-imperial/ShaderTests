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
#define _uint_1 _GLF_uniform_uint_values[0]
#define _uint_0 _GLF_uniform_uint_values[1]
#define _float_8_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_2_0 _GLF_uniform_float_values[2]
#define _float_3_0 _GLF_uniform_float_values[3]
#define _float_4_0 _GLF_uniform_float_values[4]
#define _float_5_0 _GLF_uniform_float_values[5]
#define _float_6_0 _GLF_uniform_float_values[6]
#define _float_7_0 _GLF_uniform_float_values[7]
#define _float_9_0 _GLF_uniform_float_values[8]
#define _float_10_0 _GLF_uniform_float_values[9]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [8.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 9.0, 10.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[10];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_uint_values: [1, 0]
layout(set = 0, binding = 2) uniform buf2 {
 uint _GLF_uniform_uint_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 uint a = _uint_1;
 int b = _int_1;
 float arr[5] = float[5](_float_1_0, _float_2_0, _float_3_0, _float_4_0, _float_5_0);
 arr[_GLF_MAKE_IN_BOUNDS_INT(b, 5)] += float[5](_float_6_0, _float_7_0, _float_8_0, _float_9_0, _float_10_0)[_GLF_MAKE_IN_BOUNDS_UINT(usubBorrow(1u, 1u, a), 5u)];
 if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 5)] == _float_8_0 && a == _uint_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
