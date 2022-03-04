#version 320 es

precision highp float;

precision highp int;

// Contents of one: 1
layout(set = 0, binding = 0) uniform buf0 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = 0xffffffff >> one;
 float f = clamp(5.0, 1.0, a == 0xffffffff ? 2.0 : 3.0);
 if(f == 2.0)
  _GLF_color = vec4(1, 0, 0, 1);
 else
  _GLF_color = vec4(0);
}
