#version 320 es
#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of v0: [0, 1]
layout(set = 0, binding = 1) uniform buf1 {
 ivec2 v0;
};
// Contents of v1: [2, 3]
layout(set = 0, binding = 2) uniform buf2 {
 ivec2 v1;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int arr[10];
} ;

void main()
{
 S obj = S(int[10](_int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0));
 for(int i = v0.x; i < _int_2; i ++)
  {
   obj.arr[i] = _int_2;
  }
 int a = obj.arr[_int_1] * (v0.x < _int_1 ? v0 : v1).y;
 if(a == _int_2)
  _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 else
  _GLF_color = vec4(_int_0);
}
