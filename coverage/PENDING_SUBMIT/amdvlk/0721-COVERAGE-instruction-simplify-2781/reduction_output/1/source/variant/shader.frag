#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[10] = int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 ivec2 v = ivec2(_int_1);
 int a = 1;
 if(arr[_int_1] == _int_1)
  {
   a += 1;
  }
 if(- 5 % a >= _int_1)
  {
   arr[v.x + v.y] = _int_2;
  }
 if(a == _int_2 && arr[_int_2] == _int_2)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
