#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

// Contents of two: 2.0
layout(push_constant) uniform buf_push
{
    float two;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Always true: regardless of the condition a value of one can never become larger by clamping.
    if(clamp(1, _float_1_0 > two ? 1 : 0, 1) <= 1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
