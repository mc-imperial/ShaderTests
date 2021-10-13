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

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

int func()
{
    int a = 1;
    int i = 1;

    // Iterated once.
    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count++;

        // Iterated nine times. 2 * a has no effect.
        for( i = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; 2 * a)
        {
            _GLF_global_loop_count++;
            i++;
        }
    }

    // Returns 10.
    return i;
}

void main()
{
    // Always true.
    if(func() == 10)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
