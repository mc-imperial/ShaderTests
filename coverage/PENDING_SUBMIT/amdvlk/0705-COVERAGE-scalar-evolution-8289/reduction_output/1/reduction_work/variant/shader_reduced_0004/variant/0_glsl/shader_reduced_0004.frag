#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[1];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1
layout(push_constant) uniform buf_push {
 int one;
};
void main()
{
 float f = _float_1_0;
 if(one > _int_0)
  {
   int a = 1;
   for(int i = 0; i < 120; i ++)
    {
     a *= one;
    }
   f = float(a);
  }
 f = max(f, 1.0);
 if(f == _float_1_0)
  _GLF_color = vec4(1, 0, 0, 1);
 else
  _GLF_color = vec4(0);
}
