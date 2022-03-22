#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_3 _GLF_uniform_int_values[2]
#define _int_6 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 3, 6]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_1;
 while(a < _int_3)
  {
   int b = _int_1;
   do
    {
     _GLF_global_loop_count ++;
     if(b >= _int_6)
      {
       break;
      }
     b ++;
     int unused = _int_1;
     a = (a / 256 + b);
    }
   while(_GLF_global_loop_count < _GLF_global_loop_bound);
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
}
