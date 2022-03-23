#version 320 es
#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int idx = -87256;
    int arr[3] = int[3](_int_0, _int_1, _int_2);

    for(int i = 0; i < 10; i++)
    {
        // Always true.
        if(arr[_int_1] <= _int_1)
        {
            // The array index is always zero.
            arr[max(idx++, 0)] = _int_1;
        }
    }

    // Always true.
    if(arr[_int_0] == _int_1 && arr[_int_1] == _int_1 && arr[_int_2] == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
