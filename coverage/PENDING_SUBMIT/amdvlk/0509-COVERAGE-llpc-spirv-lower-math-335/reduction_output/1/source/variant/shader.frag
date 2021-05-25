#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_0_5 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [2.0, 0.5]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
// Contents of one: 1.0
layout(set = 0, binding = 2) uniform buf2 {
 float one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f0 = _float_2_0;
 float f1 = _float_0_5 * pow(f0, 4.0);
 float f2 = _float_0_5 * pow(f0, 4.0);
 float f3 = sqrt((f1 - f2) - one + f0);
 if(int(f3) == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
