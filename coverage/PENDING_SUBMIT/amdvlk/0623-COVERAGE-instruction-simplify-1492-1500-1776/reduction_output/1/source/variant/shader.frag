#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: 1.0
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

layout(set = 0, binding = 2) uniform sampler2D tex;

void main()
{
 _GLF_color = texture(tex, vec2(_float_1_0));
 vec2 v = vec2(_float_1_0);
 int a = 0;
 while((a < 1 || v.y > 1.0) && _GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
   v *= 2.0;
   a ++;
  }
 if(_GLF_global_loop_count != _GLF_global_loop_bound)
  {
   _GLF_color = vec4(_int_0);
  }
}
