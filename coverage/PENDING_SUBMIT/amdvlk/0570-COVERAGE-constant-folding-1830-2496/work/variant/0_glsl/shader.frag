#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_5 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 5, 3]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    highp vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_0;

    // Iterated three times.
    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        a++;

        // Iterated four times.
        for(int i = clamp(ivec2(1, int(injectionSwitch.y)), ivec2(0), ivec2(_int_1)).x; i < _int_5; i++)
        {
            _GLF_global_loop_count++;
        }
    }

    // Always true.
    if(a == _int_3)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
