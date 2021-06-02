#version 320 es

precision highp int;

precision highp float;

void main()
{
 min(intBitsToFloat(ivec4(1, 1, - 1, 1)), 1.0);
}
