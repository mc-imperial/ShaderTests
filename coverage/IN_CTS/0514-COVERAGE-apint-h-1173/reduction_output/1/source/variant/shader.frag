#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_9 _GLF_uniform_int_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 9]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_9;
 while(a >= 0)
  {
   a = (a / 2) - 1;
  }
 if(a == - _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
