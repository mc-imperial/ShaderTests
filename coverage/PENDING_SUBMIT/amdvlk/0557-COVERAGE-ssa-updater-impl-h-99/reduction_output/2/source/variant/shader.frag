#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [10, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
layout(set = 0, binding = 2) uniform sampler2D tex;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 if(gl_FragCoord.y < _float_0_0)
  {
   return;
  }
 if(gl_FragCoord.x < _float_0_0)
  {
   if(gl_FragCoord.x < _float_0_0)
    {
     return;
    }
   for(int i = _int_0; (i < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
    {
     _GLF_global_loop_count ++;
     if(gl_FragCoord.x < _float_1_0)
      {
       return;
      }
    }
  }
 _GLF_color = vec4(_float_1_0, texture(tex, vec2(_float_1_0)).yzw);
}
