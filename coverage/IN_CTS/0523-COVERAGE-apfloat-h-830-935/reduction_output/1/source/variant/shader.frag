#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_0_0 _GLF_uniform_float_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 10]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [2.0, 1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[3];
};
const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int data[10];
 for(int i = _int_0; i < _int_10; i ++)
  {
   data[i] = _int_1;
  }
 float f0 = _float_1_0;
 float f1 = isnan(f0) ? _float_1_0 : _float_2_0;
 float f2 = asinh(clamp(_float_1_0, _float_1_0, gl_FragCoord.x + _float_1_0) - float(data[_int_1]));
 if(f1 == _float_2_0 && f2 == _float_0_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
