#version 320 es

precision highp int;

precision highp float;

mediump vec4 GLF_dead1gl_FragCoord = vec4(1.0);

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 GLF_dead1gl_FragCoord = vec4(1.0, 1.0, - 621.596, 1.0);
 _GLF_color = atan(trunc(GLF_dead1gl_FragCoord));
}
