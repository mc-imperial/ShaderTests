#version 320 es

precision highp int;

precision highp float;

float GLF_live8s_g = 1.0;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 GLF_live8temp = vec3(1.0);
 GLF_live8temp = (1.0 - clamp(1.0, 1.0, GLF_live8s_g)) * vec3(1.0);
 GLF_live8s_g = GLF_live8temp.y;
 ivec2 icoord = ivec2(1);
 icoord = ivec2(vec2(1.0, vec2(1.0, GLF_live8s_g)[1]));
 int v = 1;
 v = icoord.y;
 bool res3 = true;
 res3 = v != 1;
 _GLF_color = vec4(1.0, 1.0, res3 ? 1.0 : 1.0, 1);
}
