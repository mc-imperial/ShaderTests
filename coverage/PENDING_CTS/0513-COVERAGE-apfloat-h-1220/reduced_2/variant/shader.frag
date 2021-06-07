#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = pow(vec4(- 1.0, 1.0, 1.0, 1.0), sinh(vec4(1.0)));
}
