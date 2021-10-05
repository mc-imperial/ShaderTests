#version 320 es
#define _int_256 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [256, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of resolution: 256.0
layout(set = 0, binding = 1) uniform buf1 {
 float resolution;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 ivec2 p = ivec2(resolution) >> ivec2(1);
 p.x += p.y;
 if(p.x == _int_256)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
