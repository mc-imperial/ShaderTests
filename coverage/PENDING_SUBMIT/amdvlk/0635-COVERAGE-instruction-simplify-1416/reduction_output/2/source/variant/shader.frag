#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

vec4 color = vec4(1.0);

void func(int x)
{
 if(x > _int_1)
  {
   return;
  }
 ivec2 a = ivec2(_int_1);
 int b = _int_1 & (((a.x != _int_1 ? 0 : ~ 0) | (a.x != _int_1 ? 0 : ~ 0)) >> _int_1);
 if(b == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
void main()
{
 func(_int_1);
}
