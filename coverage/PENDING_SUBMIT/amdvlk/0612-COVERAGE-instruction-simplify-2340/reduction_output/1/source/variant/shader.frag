#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_16 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 16, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [2.0, 1.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float arr[10] = float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);
 if(injectionSwitch.x > injectionSwitch.y)
  {
  }
 else
  {
   if(gl_FragCoord.x < 0.0)
    {
    }
   else
    {
     if(injectionSwitch.x > injectionSwitch.y)
      {
      }
     else
      {
       arr[_int_1 / findLSB(_int_16)] = _float_2_0;
      }
    }
  }
 if(arr[_int_0] == _float_2_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
