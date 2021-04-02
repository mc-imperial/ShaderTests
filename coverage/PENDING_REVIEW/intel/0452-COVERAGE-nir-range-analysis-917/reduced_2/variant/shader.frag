#version 320 es

precision highp int;

precision highp float;

mediump vec4 GLF_dead7gl_FragCoord = vec4(1.0);

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 GLF_dead7gl_FragCoord = vec4(1.0, 1.0, 1.0, - 580.015);
 _GLF_color = clamp(ceil(GLF_dead7gl_FragCoord), vec4(1.0), vec4(1.0));
}
