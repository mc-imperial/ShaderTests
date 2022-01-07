#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1
layout(push_constant) uniform buf_push {
 int one;
};
void main()
{
 float f = 1.0;
 if(one > 0)
  {
   int a = _int_1;
   for(int i = _int_0; i < 120; i ++)
    {
     a *= one;
    }
   f = float(a);
  }
 f = max(f, 1.0);
 if(f == 1.0)
  _GLF_color = vec4(1, _int_0, _int_0, _int_1);
 else
  _GLF_color = vec4(_int_0);
}
