#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [1, 0, 4]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};

layout(set = 0, binding = 2) uniform sampler2D tex;

// Contents of zero: 0.0
layout(set = 0, binding = 3) uniform buf3
{
    float zero;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int i = 0;
    float f = texture(tex, vec2(_float_1_0)).y;

    // Sampled texel components are always <= 1. The loop will run until i is four.
    while(f <= _float_1_0 && i < 4)
    {
        // Always false.
        if(zero < _float_0_0)
        {
            continue;
        }

        i++;
    }

    // Always true.
    if(i == _int_4)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
