#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_5 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [1.0, 0.5]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};

// Contents of one: [1.0, 1.0]
layout(set = 0, binding = 2) uniform buf2
{
    vec2 one;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float f = _float_1_0;

    // Iterated once.
    do
    {
        // Iterated once.
        for (int i = 0; i != clamp(_int_0, int(one.x), 2); i++)
        {
            // Always chooses 2.0, thus f becomes 0.5.
            f /= one.y > _float_1_0 ? 256.0 : 2.0;
        }
    }
    while(_float_1_0 > one.y);

    // Always true.
    if (f > _float_0_5 - 0.01 && f < _float_0_5 + 0.01)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
