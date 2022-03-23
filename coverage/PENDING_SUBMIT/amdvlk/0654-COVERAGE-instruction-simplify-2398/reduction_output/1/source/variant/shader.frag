#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_5 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 5, 4, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr0[10] = int[10](_int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0);
 int a = _int_4;
 int idx = _int_1;
 arr0[idx] = _int_1;
 for(int i = _int_0; i < _int_5; i ++)
  {
   int b = _int_1;
   if(arr0[_int_1] == _int_1)
    {
     b ++;
    }
   int arr1[10] = int[10](_int_1, _int_1, _int_1, a, _int_1, _int_1, _int_1, _int_1, _int_1, bitfieldInsert(b, _int_1, 50, _int_1));
   int c = _int_1;
   if(arr1[c] < _int_1)
    {
    }
   else
    {
     a = _int_1;
    }
  }
 if(a == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
