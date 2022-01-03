#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_0;
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
     _GLF_global_loop_count ++;
     if(gl_FragCoord.y < _float_0_0)
      {
       return;
      }
     a = _int_1;
    }
   for(int i = 4; i >= 0 && _GLF_global_loop_count < _GLF_global_loop_bound; i --)
    {
     _GLF_global_loop_count ++;
     a = _int_2;
    }
  }
 if(a == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
