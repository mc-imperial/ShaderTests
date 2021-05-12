#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _uint_1 _GLF_uniform_uint_values[0]
#define _float_0_01 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_255_0 _GLF_uniform_float_values[2]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_uint_values: 1
layout(set = 0, binding = 0) uniform buf0
{
    uint _GLF_uniform_uint_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [0.01, 1.0, 255.0]
layout(set = 0, binding = 2) uniform buf2
{
    float _GLF_uniform_float_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Mix always chooses 1. Unpack results in (0, 0, 0, 1/255).
    vec4 v = unpackUnorm4x8(_uint_1 / mix(_uint_1, 92382u, true));

    // Always true.
    if (distance(v, vec4(_int_0, _int_0, _int_0, _float_1_0 / _float_255_0)) < _float_0_01)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
