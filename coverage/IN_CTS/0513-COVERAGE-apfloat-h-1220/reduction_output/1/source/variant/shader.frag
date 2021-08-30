#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of zero: 0
layout(set = 0, binding = 2) uniform buf2 {
 int zero;
};
void main()
{
 float f = pow(- _float_1_0, sinh(1.0));
 if(f == _float_0_0 || zero == _int_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
