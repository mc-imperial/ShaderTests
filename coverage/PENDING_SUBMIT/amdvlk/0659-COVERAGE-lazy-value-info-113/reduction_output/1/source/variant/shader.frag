#version 320 es
#define _int_5 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [5, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int data[5];
} ;

void main()
{
 S obj = S(int[5](1, 1, 1, 1, 1));
 int arr[5] = int[5](_int_0, _int_0, _int_0, _int_0, _int_0);
 for(int i = _int_0; i < _int_5; i ++)
  {
   int a = 0;
   int b = arr[1];
   int c = 1;
   if(obj.data[b] <= 1)
    {
     c ++;
    }
   arr[a + i] = c + i;
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = 0; i < _int_5; i ++)
  {
   if(arr[i] != i + 2)
    {
     _GLF_color = vec4(0);
    }
  }
}
