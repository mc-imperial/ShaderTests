#version 320 es
#define _int_33 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_245_0 _GLF_uniform_float_values[1]
#define _float_246_0 _GLF_uniform_float_values[2]
#define _float_1_1 _GLF_uniform_float_values[3]

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_float_values: [1.0, 245.0, 246.0, 1.1]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[4];
};
// Contents of _GLF_uniform_int_values: [33, 0, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = _float_1_0;
 for(int i = _int_0; (i < _int_33) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   f = abs(- _float_1_1 * f) + _float_1_0;
  }
 if(f > _float_245_0 && f < _float_246_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
