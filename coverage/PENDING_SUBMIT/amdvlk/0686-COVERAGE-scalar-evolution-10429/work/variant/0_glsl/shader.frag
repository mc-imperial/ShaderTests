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
    _GLF_color = vec4(0);

    // Iterates once.
    for(int i = _int_1 & 1; i > 0; i--)
    {
        while(true)
        {
            _GLF_color = vec4(i, _int_0, _int_0, i);

            // Always true.
            if(_int_1 > 0)
            {
                break;
            }
        }
    }
}
