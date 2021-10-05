#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
// Contents of one: 1
layout(set = 0, binding = 2) uniform buf2 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

vec4 func()
{
 vec4 v = vec4(_int_0);
 int i = _int_1;
 do
  {
   v[i] = _float_1_0;
   i ++;
  }
 while(findMSB(_int_1) > _int_1);
 return v;
}
void main()
{
 vec4 v = vec4(_int_0);
 if(one > _int_0)
  {
   v = v + func();
  }
 v = v + func();
 if(v == vec4(_int_0, _int_2, _int_0, _int_0))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
