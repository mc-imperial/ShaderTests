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
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 ivec4 v = ivec4(_int_1);
 if(one == 1)
  {
   for(int i = 2; i >= 1; i --)
    {
     for(int j = _int_2; j >= i; j --)
      {
       v[i] --;
      }
    }
  }
 if(v == ivec4(_int_1, - _int_1, _int_0, _int_1))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
