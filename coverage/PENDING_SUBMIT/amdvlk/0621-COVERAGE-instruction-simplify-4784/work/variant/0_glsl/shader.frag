#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[1];
};

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 2) uniform buf2
{
    vec2 resolution;
};

void main()
{
    // v becomes (0, 0).
    vec2 v = (mat3(_float_0_0) * vec3(resolution, 1)).xy;

    // Always true.
    if(v == vec2(_int_0))
    {
        _GLF_color = vec4(_float_1_0, v, _float_1_0);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
