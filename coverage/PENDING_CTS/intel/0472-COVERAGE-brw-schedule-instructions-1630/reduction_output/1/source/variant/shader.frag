#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_2 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_2_0 _GLF_uniform_float_values[2]
#define _float_3_0 _GLF_uniform_float_values[3]
#define _float_4_0 _GLF_uniform_float_values[4]
#define _float_5_0 _GLF_uniform_float_values[5]
#define _float_6_0 _GLF_uniform_float_values[6]
#define _float_7_0 _GLF_uniform_float_values[7]
#define _float_8_0 _GLF_uniform_float_values[8]
#define _float_9_0 _GLF_uniform_float_values[9]
#define _float_10_0 _GLF_uniform_float_values[10]
#define _float_11_0 _GLF_uniform_float_values[11]
#define _float_12_0 _GLF_uniform_float_values[12]
#define _float_13_0 _GLF_uniform_float_values[13]
#define _float_14_0 _GLF_uniform_float_values[14]
#define _float_15_0 _GLF_uniform_float_values[15]
#define _float_16_0 _GLF_uniform_float_values[16]
#define _float_27_0 _GLF_uniform_float_values[17]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [0, 2, 1, 4]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of _GLF_uniform_float_values: [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 27.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[18];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

// Contents of one: 1
layout(set = 0, binding = 2) uniform buf2 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat4 m = mat4(_float_1_0, _float_2_0, _float_3_0, _float_4_0, _float_5_0, _float_6_0, _float_7_0, _float_8_0, _float_9_0, _float_10_0, _float_11_0, _float_12_0, _float_13_0, _float_14_0, _float_15_0, _float_16_0);
 vec4 v = vec4(_float_1_0, _float_2_0, _float_3_0, _float_4_0);
 float f = _float_1_0;
 for(int k = _int_0; _GLF_global_loop_count < _GLF_global_loop_bound; k ++)
  {
   _GLF_global_loop_count ++;
   v[k] += _float_1_0;
   for(int a = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; a --)
    {
     _GLF_global_loop_count ++;
     f += v[clamp(a, 0, 4 - 1)] * m[clamp(a, 0, 4 - 1)][k];
    }
   m[1][clamp(k, 0, _int_4 - 1)] = _float_1_0;
   if(one == _int_0)
    {
     discard;
    }
   if(one == _int_2)
    {
     discard;
    }
  }
 float zero = _float_0_0;
 if(f != _float_27_0)
  {
   zero = _float_1_0;
  }
 _GLF_color = vec4(f, zero, _int_0, f);
}
