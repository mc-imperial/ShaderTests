#version 320 es

#define _int_2 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [2, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec4 v = vec4(_float_1_0);

    // Decreases v.yz by one.
    for(int i = _int_2; i > _int_0; i --)
    {
        v[i] -= _float_1_0;
    }

    // Assigns the same value multiple times.
    for(int i = 2; i > 0; i--)
    {
        for(int j = 2; j != 0; j--)
        {
            _GLF_color = v;
        }
    }
}
