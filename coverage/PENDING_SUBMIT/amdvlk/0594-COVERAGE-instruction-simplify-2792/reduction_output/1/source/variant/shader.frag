#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [10, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = 1; i < _int_10; i ++)
  {
   if(i > 0)
    {
    }
   else
    {
     switch(i)
      {
       case - 1:
       _GLF_color = vec4(_int_0);
       break;
       case 0:
       _GLF_color = vec4(_int_1);
       return;
      }
    }
  }
}
