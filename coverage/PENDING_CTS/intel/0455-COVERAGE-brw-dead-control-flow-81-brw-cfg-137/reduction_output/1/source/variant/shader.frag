#version 320 es
#define _int_100 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_10_0 _GLF_uniform_float_values[0]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: 10.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [100, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2 {
 vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(1, 0, 0, 1);
 for(int i = _int_0; i < _int_100; i ++)
  {
   if(i != _int_0)
    {
     return;
    }
  }
 if(gl_FragCoord.y < _float_10_0)
  {
   return;
  }
 _GLF_color = vec4(vec3(1.0), injectionSwitch.y);
}
