#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_2 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 2, 0, 4, 3]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

// Contents of two: 2
layout(set = 0, binding = 1) uniform buf1
{
    int two;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[3] = int[3](_int_1, _int_2, _int_3);

    // Breaks after three full iterations.
    for(int i = 0; i < 200; i++)
    {
        if(i > two)
        {
            break;
        }

        //  True for i == 0.
        if(i / _int_4 == i)
        {
            arr[i] = i;
        }
    }

    for(int i = _int_0; i < _int_3; i++)
    {
        arr[i] += arr[i];
    }

    // Always true.
    if (arr[0] == 0 && arr[1] == 4 && arr[2] == 6)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
