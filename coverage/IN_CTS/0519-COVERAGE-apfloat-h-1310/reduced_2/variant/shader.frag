#version 320 es

precision highp int;

precision highp float;

void main()
{
 float GLF_dead5c = 1.0;
 GLF_dead5c = asin(vec3(1.0, 1.0, 9.7)).z;
 fract(GLF_dead5c);
}
