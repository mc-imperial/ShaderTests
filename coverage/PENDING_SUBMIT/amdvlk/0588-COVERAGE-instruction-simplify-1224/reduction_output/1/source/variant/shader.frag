#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

int func()
{
 ivec2(injectionSwitch) >> 90955;
 return _int_1;
}
void main()
{
 if(func() == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
