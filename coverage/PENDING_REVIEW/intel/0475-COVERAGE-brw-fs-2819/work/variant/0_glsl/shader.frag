#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_4_0 _GLF_uniform_float_values[0]
#define _float_0_25 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [4.0, 0.25]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float a = 1.0;
    float b = clamp(_float_0_25, false ? a : 0.0, 1.0);

    // Always true.
    if(b == _float_0_25)
    {
        _GLF_color = vec4(b * _float_4_0, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
