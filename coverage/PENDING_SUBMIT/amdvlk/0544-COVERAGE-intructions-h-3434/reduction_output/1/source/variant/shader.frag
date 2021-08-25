#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

vec4 func()
{
 switch(0)
  {
   case 0:
   return vec4(_int_1, _int_0, _int_0, _int_1);
   default:
   return vec4(_int_0);
  }
}
void main()
{
 _GLF_color = func();
}
