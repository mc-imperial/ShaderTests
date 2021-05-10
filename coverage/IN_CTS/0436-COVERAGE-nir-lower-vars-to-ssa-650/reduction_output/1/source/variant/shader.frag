#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_5_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: [5.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

vec2 func()
{
 vec2 v;
 v.y = _float_5_0;
 int a = 2;
 return vec2[3](vec2(_float_1_0), vec2(_float_1_0), v)[a];
}
void main()
{
 if(func().y == _float_5_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
