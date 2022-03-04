#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int J = 1;
 J = (ivec2(gl_FragCoord.xy).y & 1) != 0 ? 0 : ~ 0;
 _GLF_color = vec4(vec3((J & (~ J)) == 1 ? 1.0 : 1.0), 1.0);
}
