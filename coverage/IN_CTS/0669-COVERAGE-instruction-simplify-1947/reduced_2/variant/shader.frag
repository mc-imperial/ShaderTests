#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int I = 1;
 I = ((! (! ((ivec2(gl_FragCoord.xy).y & 8) != 0))) ? 0 : ~ 0) | ((ivec2(gl_FragCoord.xy).y & 8) != 0 ? 0 : ~ 0);
 _GLF_color = vec4(vec3(I == 1 ? 0.0 : 1.0), 1.0);
}
