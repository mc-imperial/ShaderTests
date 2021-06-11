#version 320 es
#define _float_4_0 _GLF_uniform_float_values[0]
#define _float_16_0 _GLF_uniform_float_values[1]
#define _float_1_0 _GLF_uniform_float_values[2]
#define _float_0_0 _GLF_uniform_float_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [4.0, 16.0, 1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[4];
};
// Contents of two: 2.0
layout(set = 0, binding = 1) uniform buf1 {
 float two;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 c = vec3(_float_1_0);
 c.y = two;
 if(gl_FragCoord.x < _float_0_0)
  {
   while(true)
    {
    }
  }
 for(int i = 1; i < 3; i ++)
  {
   if(c[i] >= _float_1_0)
    {
     c[i] = c[1] * c[1];
    }
  }
 if(c == vec3(_float_1_0, _float_4_0, _float_16_0))
  {
   _GLF_color = vec4(1, 0, 0, 1);
  }
 else
  {
   _GLF_color = vec4(0);
  }
}
