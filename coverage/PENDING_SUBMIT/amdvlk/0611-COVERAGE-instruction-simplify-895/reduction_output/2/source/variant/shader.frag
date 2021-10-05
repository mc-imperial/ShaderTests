#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1
layout(set = 0, binding = 2) uniform buf2 {
 int one;
};
void main()
{
 int a = 1;
 do
  {
   _GLF_global_loop_count ++;
   do
    {
     _GLF_global_loop_count ++;
     a ++;
    }
   while((gl_FragCoord.y < _float_0_0) && (_GLF_global_loop_count < _GLF_global_loop_bound));
  }
 while((a != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 if(dot(vec2(1, a + one), vec2(_int_1)) > 7.9)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
