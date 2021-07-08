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

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = 1;

    while (_GLF_global_loop_count < _GLF_global_loop_bound - _int_1)
    {
        _GLF_global_loop_count++;
    }

    // Always true.
    if (_int_0 == 0)
    {
        // Iterated once.
        while (_GLF_global_loop_count < _GLF_global_loop_bound)
        {
            _GLF_global_loop_count++;
            // a becomes 0.
            a *= 1 - a;
        }
    }

    // Always true.
    if (a == _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
