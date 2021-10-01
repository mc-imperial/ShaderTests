#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]
#define _float_3_0 _GLF_uniform_float_values[2]
#define _float_4_0 _GLF_uniform_float_values[3]
#define _float_5_0 _GLF_uniform_float_values[4]
#define _float_6_0 _GLF_uniform_float_values[5]
#define _float_7_0 _GLF_uniform_float_values[6]
#define _float_8_0 _GLF_uniform_float_values[7]
#define _float_9_0 _GLF_uniform_float_values[8]
#define _float_10_0 _GLF_uniform_float_values[9]
#define _float_0_0 _GLF_uniform_float_values[10]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 0.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[11];
};
// Contents of _GLF_uniform_int_values: [1, 0, 10]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2 {
 vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float data[10] = float[10](_float_1_0, _float_2_0, _float_3_0, _float_4_0, _float_5_0, _float_6_0, _float_7_0, _float_8_0, _float_9_0, _float_10_0);
 for(int i = 0; i < 10; i ++)
  {
   for(int j = 0; j < 10; j ++)
    {
     if(j < i)
      {
       continue;
      }
     float f0 = data[i];
     float f1 = data[_int_1];
     bool b = injectionSwitch.x > _float_0_0 ? injectionSwitch.x < injectionSwitch.y : f0 > f1;
     if(b)
      {
       data[clamp(i, _int_0, _int_10 - _int_1)] = data[_int_1];
      }
    }
  }
 float ref[10] = float[10](_float_1_0, _float_2_0, _float_2_0, _float_2_0, _float_2_0, _float_2_0, _float_2_0, _float_2_0, _float_2_0, _float_2_0);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; i < _int_10; i ++)
  {
   if(data[i] != ref[i])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
