#version 310 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_01 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [0.01, 1.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float f0 = mod(10.0, 0.000001);
    float s1 = 0.00000000000000000000000000000000000001;

    if (s1 == 0.0)
        s1 = _float_1_0;

    float f1 = mod(10.0, s1);

    // Always true.
    if ((f0 > -_float_0_01 && f0 < _float_0_01) || f0 == f1)
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    else
        _GLF_color = vec4(_int_0);
}
