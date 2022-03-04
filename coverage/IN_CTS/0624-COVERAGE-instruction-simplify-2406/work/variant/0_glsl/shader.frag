#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1.0
layout(set = 0, binding = 2) uniform buf2
{
    float one;
};

void main()
{
    _GLF_color = vec4(_int_0);

    // Always false.
    if(one < _float_1_0)
    {
    }
    else
    {
        // Always false.
        if(gl_FragCoord.y < 0.0)
        {
        }
        else
        {
            // Always false.
            if(gl_FragCoord.y < 0.0)
            {
                return;
            }
        }
    }

    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;
    }

    // Always true.
    if(_GLF_global_loop_count == _GLF_global_loop_bound)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
}
