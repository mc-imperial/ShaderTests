#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_5 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _float_2_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 2.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 5, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec4 v = vec4(_int_1);
    int a = _int_0;

    // Iterates once.
    for(int m = 1; m <= 1; m *= 2)
    {
        // Iterates five times.
        for(int i = 1; i < 10; i += 2 * m)
        {
            a++;

            // min(i - 1, 10) is always i - 1 because i < 10 from the loop condition above.
            // Therefore the condition below becomes i <= i - 1, which is always false.
            while(i <= min(i - 1, 10))
            {
                for(int j = 3; j >= 1; j --)
                {
                    v[j] /= _float_2_0;
                }
            }
        }
    }

    // Always true.
    if(a == _int_5 && v == vec4(_int_1))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
