#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float f = _float_1_0;

    // Always true.
    if(_int_1 > _int_0)
    {
        int a = _int_1;

        // Multiplies a by one 120 times.
        for(int i = 0; i < 120; i ++)
        {
            a *= _int_1;
        }

        // f becomes one, which is the same as the original value of f.
        f = float(a);
    }

    // f = max(f, 1) = max(1, 1) = 1.
    f = max(f, _float_1_0);

    // Always true.
    if(f == _float_1_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
