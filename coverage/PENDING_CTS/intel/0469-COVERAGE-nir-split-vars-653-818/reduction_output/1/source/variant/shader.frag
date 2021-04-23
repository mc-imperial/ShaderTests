#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 2.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
// Contents of one: 1
layout(set = 0, binding = 2) uniform buf2 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float sums[3] = float[3](_float_1_0, _float_1_0, _float_1_0);
 for(int i = 0; i < clamp(one, _int_1, 2); i ++)
  {
   sums[_int_2] += mat2x4(_float_1_0)[i][_int_0];
  }
 if(sums[one + _int_1] == _float_2_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
