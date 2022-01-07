#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_3 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 3, 1, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    ivec4 v = ivec4(_int_0);
    int a = 1;
    int b = 1;

    do
    {
        _GLF_global_loop_count ++;

        if(b++ >= 3)
        {
            break;
        }

        // Executed twice: v[1] = 2 and v[2] = 3.
        v[a++] = a;
    }
    while(_GLF_global_loop_count < _GLF_global_loop_bound);

    // Always true.
    if(v == ivec4(_int_0, _int_2, _int_3, _int_0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
