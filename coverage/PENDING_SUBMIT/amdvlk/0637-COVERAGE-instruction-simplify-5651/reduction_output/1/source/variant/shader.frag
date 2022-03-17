#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_25 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [0.25, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

float func(vec2 v)
{
 switch(1)
  {
   case 0:
   return 1.0;
   case 1:
   return clamp(vec2(transpose(mat4(_float_0_25))), v, vec2(transpose(mat4(_float_1_0)))).x;
  }
}
void main()
{
 if(func(fract(gl_FragCoord.xy)) == 0.5)
  {
   _GLF_color = vec4(1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
