#version 320 es
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f;
 _GLF_color = mix(vec4(1.0), vec4(f, 0.0, 0.0, 1.0), bvec4(gl_FragCoord.y < _float_0_0, true, true, true));
}
