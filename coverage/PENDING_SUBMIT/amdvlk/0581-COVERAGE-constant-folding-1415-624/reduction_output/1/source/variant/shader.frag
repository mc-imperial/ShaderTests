#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_0_5 _GLF_uniform_float_values[1]
#define _float_1_0 _GLF_uniform_float_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 0.5, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[3];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

const vec4 arr[5] = vec4[5](vec4(1.0), vec4(1, 0, 0, 1), vec4(1.0), vec4(1.0), vec4(1.0));

void func0(vec4 x)
{
 vec4 v;
 for(int i = _int_1 << _int_1; i != _int_1; i --)
  {
   v = _GLF_color;
  }
 _GLF_color = v;
 if(gl_FragCoord.x < _float_0_0)
  {
   return;
  }
 if(gl_FragCoord.x < _float_0_0)
  {
   discard;
  }
 if(x.x > _float_0_0)
  {
   _GLF_color = vec4(_int_1);
   return;
  }
 _GLF_color = vec4(_int_0);
 return;
}
vec4 func1()
{
 vec4 v = vec4(_float_1_0, _float_0_5, _float_1_0, _float_1_0);
 for(int i = 0; i < 3; i ++)
  {
   func0(vec4[3](vec4(1.0), vec4(1.0), vec4(1.0))[i]);
   v = arr[_int_1];
  }
 return v;
}
void main()
{
 _GLF_color = func1();
}
