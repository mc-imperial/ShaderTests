#version 320 es

precision highp int;

precision highp float;

void main()
{
 vec2(transpose(transpose(mat3x2(1.0))));
}
