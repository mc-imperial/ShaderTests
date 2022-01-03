#version 320 es
#define _int_9 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]
#define _int_5 _GLF_uniform_int_values[6]
#define _int_6 _GLF_uniform_int_values[7]
#define _int_7 _GLF_uniform_int_values[8]
#define _int_8 _GLF_uniform_int_values[9]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [9, 0, 2, 1, 3, 4, 5, 6, 7, 8]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[10];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_0;
 int arr[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
 for(int i = _int_0; (i < _int_9) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   a ++;
   arr[_int_2] = arr[a];
  }
 if(arr[_int_2] == _int_9)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
