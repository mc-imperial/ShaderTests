#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 c = vec3(1.0);
 float compute_value_inline_return_value_0 = 1.0;
 float result = 1.0;
 vec4 _GLF_outVarBackup_GLF_color = vec4(1.0);
 _GLF_outVarBackup_GLF_color = _GLF_color;
 float donor_replacementGLF_dead6A = 1.0;
 float GLF_dead6fx_inline_return_value_0 = 1.0;
 GLF_dead6fx_inline_return_value_0 = pow(distance(_GLF_outVarBackup_GLF_color, vec4(1.0)), 2.0);
 donor_replacementGLF_dead6A = GLF_dead6fx_inline_return_value_0;
 result = donor_replacementGLF_dead6A;
 compute_value_inline_return_value_0 = result;
 c.y = compute_value_inline_return_value_0;
 _GLF_color = vec4(c, 1.0);
}
