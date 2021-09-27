#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [10, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
     _GLF_global_loop_count ++;
     if(gl_FragCoord.y < 0.0)
      {
       continue;
      }
     if(gl_FragCoord.y < 0.0)
      {
       return;
      }
     do
      {
       if(gl_FragCoord.y < 0.0)
        {
         return;
        }
      }
     while(false);
    }
  }
 if(_GLF_global_loop_count == _int_10)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
