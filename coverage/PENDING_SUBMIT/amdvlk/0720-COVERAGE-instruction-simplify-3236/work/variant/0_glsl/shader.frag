#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    _GLF_color = vec4(_int_0);

    // Iterates once with i = 1.
    for(int i = 1; i <= 1; i *= 2)
    {
        // Iterates once with j = 0.
        for(int j = 0; j < 1; j += 2 * i)
        {
            // k = 1 + 0 + 1 = 2
            int k = i + j + 1;

            // Never iterates.
            while((j + i) >= _int_1 && k <= min(j + 2 * i, 1))
            {
                return;
            }
        }
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
}
