#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [10, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[10];
 int a = 0;
 for(int i = _int_0; i < _int_10; i ++)
  {
   arr[i] = i;
  }
 if(arr[_int_1] == _int_1)
  {
   for(int i = _int_0; i < _int_10; i ++)
    {
    }
   a ++;
  }
 if(- 1 % a == _int_0)
  {
   ivec2 v = ivec2(_int_1);
   arr[v.y] = _int_0;
  }
 if(arr[_int_1] == _int_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
