#version 320 es

precision highp int;

precision highp float;

vec3 computePoint()
{
 1.0 <= float(int(ivec3((1 >> ((gl_FragCoord.y < 1.0) ? 256 : 1)), 1, 1)));
 return vec3(1.0);
}
void main()
{
 computePoint();
}
