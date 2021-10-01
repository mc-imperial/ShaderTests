#version 320 es
#define _int_16 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_7 _GLF_uniform_int_values[4]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [16, 1, 0, 2, 7]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[16] = int[16](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 for(int i = _int_2; (i >= bitfieldExtract(_int_1, _int_1, _int_1)) && (_GLF_global_loop_count < _GLF_global_loop_bound); i --)
  {
   _GLF_global_loop_count ++;
   int a = _int_1;
   if(arr[_int_1] == _int_1)
    {
     arr[a] = i;
    }
   for(int j = _int_2; (j < _int_7) && (_GLF_global_loop_count < _GLF_global_loop_bound); j ++)
    {
     _GLF_global_loop_count ++;
     arr[j] = 0;
    }
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 int ref[16] = int[16](_int_1, _int_2, _int_0, _int_0, _int_0, _int_0, _int_0, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 for(int i = _int_0; (i < _int_16) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(arr[i] != ref[i])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
