#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Always true. The line below simplifies to
    // min(vec2(1, 1), vec2(transpose(mat2(1)))).y = min(vec2(1, 1), vec2(mat2(1))).y
    // = min(vec2(1, 1), vec2(1, 0)).y = vec2(1, 0).y = 0.
    if(min(vec2(1), vec2(transpose(mat2(_int_1)))).y == _float_0_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
