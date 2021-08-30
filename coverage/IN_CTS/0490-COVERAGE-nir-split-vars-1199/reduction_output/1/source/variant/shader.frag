#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 10]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int data;
} ;

void func(inout S s, int x)
{
 if(one == _int_0)
  {
   return;
  }
 s.data = x;
}
void main()
{
 int index;
 S arr[10];
 if(one == _int_0)
  {
   func(arr[clamp(index, _int_0, _int_10 - _int_1)], index);
  }
 else
  {
   func(arr[_int_0], _int_1);
  }
 if(arr[_int_0].data == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
