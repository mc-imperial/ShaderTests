#version 320 es

precision highp int;

precision highp float;

void main()
{
 transpose(mat2(1.0)) * transpose(mat2(1.0));
}
