#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]
#define _int_4 _GLF_uniform_int_values[4]
#define _float_0_5 _GLF_uniform_float_values[0]
#define _float_1_5 _GLF_uniform_float_values[1]
#define _float_1_0 _GLF_uniform_float_values[2]
#define _float_2_0 _GLF_uniform_float_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 3, 4]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[5];
};
// Contents of _GLF_uniform_float_values: [0.5, 1.5, 1.0, 2.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat2 m = transpose(mat2(_int_1, _int_2, _int_3, _int_4)) / _float_2_0;
 if(m == mat2(_float_0_5, _float_1_5, _float_1_0, _float_2_0))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
