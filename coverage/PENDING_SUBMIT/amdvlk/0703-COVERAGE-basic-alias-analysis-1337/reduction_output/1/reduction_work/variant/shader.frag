#version 320 es

precision highp float;

precision highp int;

// Contents of v0: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 ivec2 v0;
};
// Contents of v1: [2, 3]
layout(set = 0, binding = 1) uniform buf1 {
 ivec2 v1;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int arr[10];
} ;

void main()
{
 S obj = S(int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
 for(int i = v0.x; i < 2; i ++)
  {
   obj.arr[i] = 2;
  }
 int a = obj.arr[1] * (v0.x < 1 ? v0 : v1).y;
 if(a == 2)
  _GLF_color = vec4(1, 0, 0, 1);
 else
  _GLF_color = vec4(0);
}
