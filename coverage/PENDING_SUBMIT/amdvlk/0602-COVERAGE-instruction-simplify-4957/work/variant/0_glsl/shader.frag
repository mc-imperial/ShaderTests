#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [2.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // (1, 1 - (-0)) dot (1, 1) = (1, 1) dot (1, 1) = 1 * 1 + 1 * 1 = 2
    float f = dot(vec2(_float_1_0, _float_1_0 - (- 0.0)), vec2(_float_1_0));

    // Always true.
    if(f == _float_2_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
