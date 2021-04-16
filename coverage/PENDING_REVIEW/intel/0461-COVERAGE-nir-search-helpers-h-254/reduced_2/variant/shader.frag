#version 320 es

precision highp float;

precision highp int;

// Contents of GLF_dead3polynomial: [0.47921413, 0.9433394, 0.06115395]
layout(set = 0, binding = 0) uniform buf0 {
 vec3 GLF_dead3polynomial;
};
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
void main()
{
 vec3 c = vec3(1.0);
 float thirty_two = 1.0;
 float GLF_dead3fx_inline_return_value_0 = 1.0;
 GLF_dead3fx_inline_return_value_0 = GLF_dead3polynomial.x * 2.0 + 0.9433394 * round(resolution.x) + GLF_dead3polynomial.z;
 thirty_two = GLF_dead3fx_inline_return_value_0;
 c.x = thirty_two;
 _GLF_color = vec4(c, 1.0);
}
