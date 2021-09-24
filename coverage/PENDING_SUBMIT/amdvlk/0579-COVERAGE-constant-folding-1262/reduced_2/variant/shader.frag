#version 320 es

precision highp float;

precision highp int;

int pointInTriangle()
{
 unpackUnorm2x16(1u).y < 0.0;
 return 1;
}
void main()
{
 pointInTriangle() == 1;
}
