#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[1];
};
// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[1];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_0);
 if(gl_FragCoord.x < _float_0_0)
  {
  }
 else
  {
   if(gl_FragCoord.y < 0.0)
    {
    }
   else
    {
     if(gl_FragCoord.x >= 0.0)
      {
       do
        {
         _GLF_color = vec4(1, _int_0, _int_0, 1);
        }
       while(gl_FragCoord.y < 0.0);
      }
     else
      {
      }
    }
  }
}
