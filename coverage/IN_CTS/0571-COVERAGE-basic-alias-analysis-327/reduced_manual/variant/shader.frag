#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1 | 1;
    int arr[10] = int[10](_int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0);

    arr[a]++;

    // Always true.
    if(arr[_int_1] == _int_1)
    {
        arr[_int_1] ++;
    }

    // Always true.
    if(arr[_int_1] == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
