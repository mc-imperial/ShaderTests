#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_4 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_256_0 _GLF_uniform_float_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [0.4, 1.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 if(gl_FragCoord.y < _float_0_4)
  {
   _GLF_color = vec4(_int_0);
  }
 else
  {
   ivec2 v = ivec2((gl_FragCoord.xy - vec2(_float_1_0, _float_0_4)) * _float_256_0);
   _GLF_color = vec4(_float_1_0, (v.y - _int_1) & _int_1, v.x & _int_1, _float_1_0);
  }
}
