#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]
#define _int_5 _GLF_uniform_int_values[6]
#define _int_6 _GLF_uniform_int_values[7]
#define _int_7 _GLF_uniform_int_values[8]
#define _int_8 _GLF_uniform_int_values[9]
#define _int_9 _GLF_uniform_int_values[10]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [10, 1, 0, 2, 3, 4, 5, 6, 7, 8, 9]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[11];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
 int ref[10] = int[10](_int_0, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 for(int i = 0; i < _int_10; i ++)
  {
   arr[i] = arr[clamp(sign(i), _int_0, _int_1)];
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; i < _int_10; i ++)
  {
   if(arr[i] != ref[i])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
