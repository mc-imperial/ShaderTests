#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_256 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 256]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[1];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(push_constant) uniform buf_push {
 vec2 resolution;
};
int func(float a, float b)
{
 int c = _int_1;
 int d = 1;
 for(int i = 0; i < 2; i ++)
  {
   while(d < 300)
    {
     if(mod(float(d), b) > _float_0_0)
      {
       c ++;
      }
     if(float(d) >= a)
      {
       return c;
      }
     d ++;
    }
  }
 return _int_0;
}
void main()
{
 if(func(resolution.x, resolution.y) == _int_256)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
