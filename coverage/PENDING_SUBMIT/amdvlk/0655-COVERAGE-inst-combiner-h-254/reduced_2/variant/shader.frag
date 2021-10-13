#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int A = 1;
 A = (ivec2(gl_FragCoord.xy).x & 1) != 0 ? 0 : ~ 0;
 _GLF_color = vec4(vec3((~ (A | 1)) == 1 ? 1.0 : 1.0), 1.0);
}
