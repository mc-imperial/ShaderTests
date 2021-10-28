#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_9 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 9]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1 {
 int zero;
};
void main()
{
 int msb10 = zero | 1024;
 int a = _int_0;
 for(int i = _int_1; i < findLSB(msb10); i ++)
  {
   a ++;
  }
 if(a == _int_9)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
