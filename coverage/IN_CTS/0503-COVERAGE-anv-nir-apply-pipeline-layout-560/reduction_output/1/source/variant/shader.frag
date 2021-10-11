#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_5 _GLF_uniform_float_values[1]

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.5]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
// Contents of injectionSwitch: [1.0, 1.0]
layout(set = 0, binding = 2) uniform buf2 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = _float_1_0;
 do
  {
   for(int i = 0; i != clamp(_int_0, int(injectionSwitch.x), 2); i ++)
    {
     f /= injectionSwitch.y > _float_1_0 ? 256.0 : 2.0;
    }
  }
 while(_float_1_0 > injectionSwitch.y);
 if(f == _float_0_5)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
