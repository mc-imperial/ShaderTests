#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_6 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 6, 5]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = min(1, bitfieldReverse(1));
 int b = _int_5;
 for(int i = 1; i <= a - 1; i ++)
  {
   b += i;
   if(one == _int_1)
    {
     break;
    }
  }
 if(b == _int_6)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
