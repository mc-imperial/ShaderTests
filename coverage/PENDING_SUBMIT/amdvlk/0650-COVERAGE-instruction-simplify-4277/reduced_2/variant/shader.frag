#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 _GLF_outVarBackup_GLF_color = vec4(1.0);
 _GLF_outVarBackup_GLF_color = _GLF_color;
 _GLF_color = mix(vec4(1.0), vec4(1.0, 1.0, _GLF_outVarBackup_GLF_color[1], 1.0), bvec4(true, true, (gl_FragCoord.y >= 1.0), true));
}
