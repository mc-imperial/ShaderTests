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
#define _int_10 _GLF_uniform_int_values[2]
#define _uint_1 _GLF_uniform_uint_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]
#define _float_3_0 _GLF_uniform_float_values[2]
#define _float_4_0 _GLF_uniform_float_values[3]
#define _float_5_0 _GLF_uniform_float_values[4]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_uint_values: 1
layout(set = 0, binding = 0) uniform buf0 {
 uint _GLF_uniform_uint_values[1];
};
// Contents of _GLF_uniform_int_values: [1, 0, 10]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [1.0, 2.0, 3.0, 4.0, 5.0]
layout(set = 0, binding = 2) uniform buf2 {
 float _GLF_uniform_float_values[5];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 uint a = _uint_1;
 float arr[16] = float[16](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);
 int i = _int_1;
 do
  {
   arr[_GLF_MAKE_IN_BOUNDS_INT(i ++, 16)] += float[5](_float_1_0, _float_2_0, _float_3_0, _float_4_0, _float_5_0)[usubBorrow(a, _uint_1, a)];
  }
 while(i < _int_10);
 if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 16)] == _float_2_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
