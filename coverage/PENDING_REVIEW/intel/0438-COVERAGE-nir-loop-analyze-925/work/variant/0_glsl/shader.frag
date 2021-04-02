#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = 1;

    do
    {
        // Always true.
        if(a >= _int_0)
        {
            break;
        }

        // Never executed as the break above is always hit.
        if (true)
        {
            discard;
        }

        a++;
    }
    while(a != 1);

    // Always true.
    if(a == 1)
    {
        _GLF_color = vec4(1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
