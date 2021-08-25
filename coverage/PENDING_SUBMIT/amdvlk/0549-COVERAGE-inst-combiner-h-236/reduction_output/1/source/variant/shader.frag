#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_5 _GLF_uniform_float_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[1];
};
// Contents of _GLF_uniform_float_values: [0.0, 1.5]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float a = _float_1_5;
 _GLF_color = vec4(_int_0);
 if(gl_FragCoord.y > _float_0_0)
  {
   _GLF_color = vec4(1);
  }
 if(gl_FragCoord.x > _float_0_0)
  {
   _GLF_color = vec4(2);
  }
 if(gl_FragCoord.x > _float_0_0)
  {
   _GLF_color = vec4(1, 0, 0, 1);
   if(gl_FragCoord.y > _float_0_0)
    {
     fract(a);
    }
  }
}
