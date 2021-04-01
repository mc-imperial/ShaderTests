#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = clamp(cosh(vec4(1.0)), 1.0, 1.0);
}
