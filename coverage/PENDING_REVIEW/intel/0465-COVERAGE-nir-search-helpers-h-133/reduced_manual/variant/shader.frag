#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]
#define _float_1_0 _GLF_uniform_float_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [0.0, 2.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec2 v0 = vec2(_float_1_0, 3.8);
    vec2 v1 = clamp(v0 - 1.0, 0.0, _float_2_0);

    if (v1 == vec2(_float_0_0, _float_2_0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
