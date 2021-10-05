#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: 1
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[1];
};

// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec4 v;
    // _GLF_color becomes (1, 1, 1, 1). Vector v is uninitialized, but none of it's values are selected.
    _GLF_color = mix(vec4(1.0, v[_int_1], 1.0, 1.0), vec4(1), bvec4(true, true, gl_FragCoord.y > _float_0_0, true));
    // Adjust the color to (1, 0, 0, 1).
    _GLF_color.yz -= _float_1_0;
}
