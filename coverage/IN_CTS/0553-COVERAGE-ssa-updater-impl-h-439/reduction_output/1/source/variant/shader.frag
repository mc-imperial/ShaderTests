#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_1 _GLF_uniform_float_values[1]
#define _float_0_0 _GLF_uniform_float_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[1];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.1, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[3];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

float func(float x)
{
 float f = _float_1_0;
 if(injectionSwitch.y < _float_1_0)
  {
   if(gl_FragCoord.x < _float_0_0)
    {
     return _float_1_0;
    }
  }
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   f += _float_1_0;
   if(gl_FragCoord.x >= 0.0)
    {
     _GLF_color = vec4(_float_1_0);
    }
   if(x < _float_0_0)
    {
     return f;
    }
  }
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
  }
 return f;
}
void main()
{
 _GLF_color = vec4(_int_0);
 if(gl_FragCoord.x < _float_0_1)
  {
   return;
  }
 vec4 v0 = _GLF_color;
 if(gl_FragCoord.x >= 0.0)
  {
   _GLF_color = vec4(_float_1_0);
  }
 _GLF_color = v0;
 if(gl_FragCoord.y < _float_0_1)
  {
   return;
  }
 vec4 v1 = vec4(_float_0_0);
 v1.x = v1.w = func(gl_FragCoord.y);
 if(gl_FragCoord.x >= 0.0)
  {
   _GLF_color = vec4(_float_1_0);
  }
 if(gl_FragCoord.x < _float_0_0)
  {
   return;
  }
 _GLF_color = v1;
}
