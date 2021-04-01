#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat3x2 m32 = mat3x2(_float_1_0);
 int a = 3;
 m32[a][_int_0] = _float_1_0;
 float sums[3] = float[3](_float_1_0, _float_1_0, _float_1_0);
 for(int c = _int_0; c < _int_2; c ++)
  {
   sums[_int_2] += m32[c][_int_0];
  }
 _GLF_color = vec4(sums[_int_0], _float_0_0, _float_0_0, sums[_int_1]);
}
