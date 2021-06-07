#version 320 es

precision highp float;

precision highp int;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
void main()
{
 float thirty_two = 1.0;
 float donor_replacementGLF_dead5A = 1.0;
 float GLF_dead5fx_inline_return_value_0 = 1.0;
 GLF_dead5fx_inline_return_value_0 = 0.702607 * pow(thirty_two, 1.0);
 float GLF_dead5fx_inline_return_value_1 = 1.0;
 GLF_dead5fx_inline_return_value_1 = 0.702607 * pow(thirty_two, 1.0);
 donor_replacementGLF_dead5A = ((GLF_dead5fx_inline_return_value_0 - GLF_dead5fx_inline_return_value_1) - resolution.x);
 sqrt(donor_replacementGLF_dead5A);
}
