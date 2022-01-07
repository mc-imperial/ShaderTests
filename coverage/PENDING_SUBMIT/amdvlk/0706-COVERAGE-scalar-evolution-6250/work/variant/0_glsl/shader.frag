#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

const int _GLF_global_loop_bound = 5;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int i = 1;

    // Loops until the global loop bound is reached.
    do
    {
        _GLF_global_loop_count ++;

        // Always true.
        if(gl_FragCoord.y > 0.0)
        {
            float f = _float_1_0;
            modf(_float_1_0, f);
            i++;
        }
        // During the first iteration i becomes 3, making the i != 2 below always false.
        i++;
    }
    while(i != 2 && _GLF_global_loop_count < _GLF_global_loop_bound);

    // Always true.
    if(i == 11)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
