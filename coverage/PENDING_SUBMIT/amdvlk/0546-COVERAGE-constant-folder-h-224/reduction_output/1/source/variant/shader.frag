#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 10]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[10] = int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 int ref[10] = int[10](_int_1, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_1, _int_1, _int_1);
 int a = 1;
 for(int i = 1; i < 10; i ++)
  {
   if(a > 6)
    {
     break;
    }
   a ++;
   arr[i] = 0;
  }
 do
  {
  }
 while(arr[1] == _int_1);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; i < _int_10; i ++)
  {
   if(arr[i] != ref[i])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
