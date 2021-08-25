#version 320 es
#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of zero: 0.0
layout(push_constant) uniform buf_push {
 float zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat2 m = mat2(zero);
 vec2 v0 = roundEven(m * gl_FragCoord.xy);
 vec2 v1 = asinh(v0);
 int a = _int_1;
 int b = isnan(float(a)) ? _int_1 : _int_2;
 if(b == _int_2)
  {
   _GLF_color = vec4(_int_1, v1.x, v1.y, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
