#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of resolution: [0.2501191, 0.1597625]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
layout(location = 0) out vec4 _GLF_color;

vec4 func(ivec2 v)
{
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   if(v.x < _int_1)
    {
     return vec4(_int_1, _int_0, _int_0, _int_1);
    }
  }
 return vec4(_int_0);
}
void main()
{
 _GLF_color = func((ivec2(vec2(0, _int_1) / resolution)));
}
