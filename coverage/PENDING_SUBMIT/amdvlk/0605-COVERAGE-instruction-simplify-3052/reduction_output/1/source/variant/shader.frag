#version 320 es
#define _int_800 _GLF_uniform_int_values[0]
#define _int_47942 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_47941 _GLF_uniform_int_values[4]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [800, 47942, 0, 1, 47941]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[10] = int[10](_int_1, _int_47941, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 int i = _int_0;
 for( i = _int_1;
 i < _int_800; i ++)
  {
   int a = i + 1;
   while(i < a)
    {
     i = arr[_int_1];
    }
  }
 if(i == _int_47942)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
