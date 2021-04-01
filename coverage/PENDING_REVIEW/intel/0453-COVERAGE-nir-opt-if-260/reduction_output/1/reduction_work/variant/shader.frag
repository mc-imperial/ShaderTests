#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 3]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1 {
 int zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 do
  {
   if(zero == _int_1)
    {
     continue;
    }
   if(zero == _int_2)
    {
     break;
    }
   if(zero == _int_3)
    {
     discard;
    }
   return;
  }
 while(false);
 _GLF_color = vec4(_int_0);
}
