#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of one: 1.0
layout(set = 0, binding = 1) uniform buf1
{
    float one;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Always true as -1 < 1.
    if(min(-1.0, one) < 1.0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
