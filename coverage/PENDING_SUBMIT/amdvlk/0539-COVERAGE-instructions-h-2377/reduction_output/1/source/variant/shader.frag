#version 320 es
#define _int_5 _GLF_uniform_int_values[0]
#define _int_4 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [5, 4, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
struct S {
 int i;
} ;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_1;
 for(S s = S(0); s.i < _int_5; s.i ++)
  {
   if(a > 3)
    {
     break;
    }
   a ++;
  }
 if(a == _int_4)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
