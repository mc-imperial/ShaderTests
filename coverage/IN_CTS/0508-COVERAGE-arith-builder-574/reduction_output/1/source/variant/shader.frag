#version 320 es
#define _int_7 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_8 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_3_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [7, 1, 0, 8]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of _GLF_uniform_float_values: [1.0, 3.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = 2.0;
 float arr[10] = float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, pow(f, _float_3_0), _float_1_0, _float_1_0);
 if(int(arr[_int_7]) == _int_8)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
