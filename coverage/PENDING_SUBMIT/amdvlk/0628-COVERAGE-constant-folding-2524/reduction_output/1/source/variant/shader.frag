#version 320 es
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
 arr[b] += float[5](_float_6_0, _float_7_0, _float_8_0, _float_9_0, _float_10_0)[usubBorrow(1u, 1u, a)];
 if(arr[_int_1] == _float_8_0 && a == _uint_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
