#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]
#define _float_3_0 _GLF_uniform_float_values[2]

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 4]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0, 3.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat4x3 m43 = mat4x3(_float_0_0);
 m43[_int_1][_int_1] = _float_1_0;
 float sums[3] = float[3](_float_1_0, _float_1_0, _float_1_0);
 for(int i = _int_1; (i < _int_4) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   sums[_int_1] += m43[i][_int_1];
  }
 int a = 4;
 sums[_int_2] += m43[a][_int_1];
 if(sums[_int_0] + sums[_int_1] == _float_3_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
