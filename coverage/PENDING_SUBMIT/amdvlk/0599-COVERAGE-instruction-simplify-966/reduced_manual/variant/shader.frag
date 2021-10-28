#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1;

    // Iterated ten times.
    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        int b = _int_1;

        int arr[10] = int[10](_int_0, (a / a), _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0);

        // a still has a value of one after this assignment.
        a = arr[b];
    }

    // Always true.
    if(a == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
