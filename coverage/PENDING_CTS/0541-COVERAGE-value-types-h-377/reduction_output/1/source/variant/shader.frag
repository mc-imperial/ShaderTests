#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_8 _GLF_uniform_int_values[3]
#define _int_10 _GLF_uniform_int_values[4]
#define _int_9 _GLF_uniform_int_values[5]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 2, 8, 10, 9]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
layout(location = 0) out vec4 _GLF_color;

const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

int arr0[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), arr1[10] = int[10](2, 2, 2, 2, 2, 2, 2, 2, 2, 2);

void main()
{
 for(int i = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
  {
   _GLF_global_loop_count ++;
   int k = _int_1, j = i;
   while((j < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound))
    {
     _GLF_global_loop_count ++;
     arr1[k ++] = arr0[j ++];
    }
   arr0[_int_1] = arr1[_int_1];
  }
 if(arr1[_int_0] == _int_2 && arr1[_int_1] == _int_1 && arr1[_int_8] == _int_1 && arr1[_int_9] == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
