#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_58 _GLF_uniform_float_values[0]
#define _float_1_55 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [1.58, 1.55]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 v = vec4(_int_0, _int_0, - 621.596, _int_0);
 float f = atan(trunc(v)).z;
 if(f > - _float_1_58 && f < - _float_1_55)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
