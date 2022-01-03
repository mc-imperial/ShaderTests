#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: 1
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[1];
};
// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[1];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void func(float ref)
{
 for(int i = 1; i > 0 && _GLF_global_loop_count < _GLF_global_loop_bound; i --)
  {
   _GLF_global_loop_count ++;
  }
}
void main()
{
 func(_float_1_0);
 if(_GLF_global_loop_count == _int_1)
  {
   _GLF_color = vec4(1, 0, 0, 1);
  }
}
