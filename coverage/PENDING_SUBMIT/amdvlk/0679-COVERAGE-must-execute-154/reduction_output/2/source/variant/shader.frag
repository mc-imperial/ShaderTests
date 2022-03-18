#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1 {
 int zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_1, _int_0, _int_0, 1);
 int a = 1;
 do
  {
   _GLF_global_loop_count ++;
   if(a ++ >= 7)
    {
     break;
    }
   vec4 v = _GLF_color;
   _GLF_color = vec4(a);
   if(gl_FragCoord.x >= 0.0)
    {
     _GLF_color = v;
    }
  }
 while((_int_1 > zero) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
