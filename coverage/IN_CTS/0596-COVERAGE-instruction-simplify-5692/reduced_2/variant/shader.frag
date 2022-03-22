#version 320 es

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 vecCoor = vec3(1.0);
 vecCoor = min(vec3(gl_FragCoord.xx, 1), min(vec3(gl_FragCoord.xx, 1), vec3(1.0)));
 vec2 color = vec2(1.0);
 color = vecCoor.yx;
 _GLF_color = vec4(vec3(color, 1.0), 1.0);
}
