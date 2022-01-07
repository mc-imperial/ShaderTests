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
    int arr[10] = int[10](30989, 0, 0, 0, 0, 0, 0, 0, 0, 1);
    int i = 0;
    int a = _int_0;

    // Iterates twice.
    while(i != 1)
    {
        // The first iteration sets i to arr[0] = 30989, and the second iteration sets i to arr[9] = 1.
        i = arr[clamp(i, 0, 10 - 1)];
        a++;
    }

    // Always true.
    if(a == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
