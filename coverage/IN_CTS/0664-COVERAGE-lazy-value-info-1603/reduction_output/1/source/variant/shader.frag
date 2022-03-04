#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_5 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [0, 5, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2 {
 vec2 injectionSwitch;
};
void main()
{
 _GLF_color = vec4(_int_0);
 if(injectionSwitch.x > injectionSwitch.y)
  {
  }
 else
  {
   if(gl_FragCoord.x >= _float_0_0)
    {
     _GLF_color = vec4(_float_1_0);
    }
   for(int i = _int_0; i < _int_5; i ++)
    {
     _GLF_color = vec4(_int_1, _int_0, _int_0, 1);
     if(gl_FragCoord.y >= _float_0_0)
      {
       if(injectionSwitch.x > injectionSwitch.y)
        {
         _GLF_color = vec4(0);
        }
      }
    }
  }
}
