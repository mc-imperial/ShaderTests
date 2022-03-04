#version 320 es

precision highp float;

precision highp int;

void main()
{
 int j;
 ldexp(1.0, (j / ivec2(1, int(gl_FragCoord.xy.y)))[1]);
}
