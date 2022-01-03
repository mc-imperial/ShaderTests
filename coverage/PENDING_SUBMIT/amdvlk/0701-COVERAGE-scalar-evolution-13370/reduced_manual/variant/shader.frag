#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    ivec4 v = ivec4(_int_1);

    // Always true.
    if(_int_1 == 1)
    {
        // Iterates twice.
        for(int i = 2; i >= 1; i--)
        {
            // Iterates once when i = 2 and twice when i = 1.
            for(int j = _int_2; j >= i; j--)
            {
                v[i]--;
            }
        }
    }

    // Always true.
    if(v == ivec4(_int_1, -_int_1, _int_0, _int_1))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
