#version 310 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = mod(vec4(45.89, 3625.0545, 9.5, 2.1), intBitsToFloat(ivec4(54843, 6405, 1, 1)));
}
