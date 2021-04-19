#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_6 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 6, 5]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // a becomes 0x8000000 which is the smallest possible negative integer.
    int a = min(1, bitfieldReverse(1));
    int b = _int_5;

    // a - 1 underflowa to the largest positive integer. The loop is executed
    // once because of the break inside.
    for (int i = 1; i <= a - 1; i++)
    {
        b += i;

        // Always true.
        if (_int_1 == 1)
        {
            break;
        }
    }

    // Always true.
    if (b == _int_6)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
