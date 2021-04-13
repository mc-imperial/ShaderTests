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

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

int func()
{
    // Never iterated as the loop count has already been exhausted
    // before calling this function.
    while (_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count++;
        return _int_1;
    }

    return _int_2;
}

void main()
{
    do
    {
        _GLF_global_loop_count++;

        if (false)
        {
            return;
        }
    }
    while (true && (_GLF_global_loop_count < _GLF_global_loop_bound));

    int a = func();

    // Always true.
    if (a == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
