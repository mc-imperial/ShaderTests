#version 320 es
#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_7 _GLF_uniform_int_values[3]
#define _int_6 _GLF_uniform_int_values[4]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0, 7, 6]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[5];
};
int arr0[10] = int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0), arr1[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

layout(location = 0) out vec4 _GLF_color;

void func(int x, int y)
{
 for(int i = _int_1; i < _int_6; i ++)
  {
   arr1[i] = arr0[_int_1];
  }
 int a = 0;
 for(int i = x; i < y; i ++)
  {
   if(a ++ > 6)
    {
     break;
    }
   arr0[i] = arr1[_int_1];
  }
}
void main()
{
 int a = 1;
 for(int i = 1; a < 6; i = _int_2 , a ++)
  {
   for(int j = 1; j < 10; j += i)
    {
     func(j, 10);
    }
  }
 _GLF_color = vec4(arr1[_int_0], arr0[_int_0], arr1[_int_1], arr1[_int_7]);
}
