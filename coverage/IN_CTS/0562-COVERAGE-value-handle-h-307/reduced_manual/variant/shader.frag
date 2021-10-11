#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = 3;
    vec4 v = vec4(1.0);

    // Iterates four times.
    for(int i = a; i >= 0; i--)
    {
        // Iterates once because of the break at the end of the block.
        for(int j = a; j >= 0; j--)
        {
            // i goes from 3 to 0 decreasing each channel by one.
            v[i] -= _float_1_0;

            // Always false.
            if(gl_FragCoord.x < _float_0_0)
            {
                continue;
            }

            // Does not affect the outer loop because the initializer
            // has already been run.
            a++;

            break;
        }
    }

    // Always true.
    if(a == 7 && v == vec4(0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
