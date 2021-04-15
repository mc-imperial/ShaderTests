#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = unpackUnorm4x8(1u / mix(1u, 92382u, true));
}
