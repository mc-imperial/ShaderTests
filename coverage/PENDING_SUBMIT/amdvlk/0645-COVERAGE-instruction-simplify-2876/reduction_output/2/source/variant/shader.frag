#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_8 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 8]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[1];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_0;
 for(int i = 1; i <= 10; i *= 2)
  {
   for(int j = 0; j < 10; j += i)
    {
     int b = j + i - 1;
     a = j;
     while(a <= b && b <= 1)
      {
       if(gl_FragCoord.x < _float_0_0)
        {
         discard;
        }
       a ++;
      }
    }
  }
 if(a == _int_8)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
