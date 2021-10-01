#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 _GLF_color = vec4(1.0);
 if(min(vec2(- 1.0, 1.0), resolution).x < 1.0)
  {
   _GLF_color = vec4(1.0, 1.0, 31.20, 1.0);
  }
}
