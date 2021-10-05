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

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 2) uniform sampler2D tex;

void main()
{
    // This will be overwritten later.
    _GLF_color = texture(tex, vec2(_float_1_0));

    vec2 v = vec2(_float_1_0);
    int a = 0;

    // One of the conditions in parentheses is always true.
    while((a < 1 || v.y > 1.0) && _GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count++;
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
        v *= 2.0;
        a++;
    }

    // Always false: the previous loop was run until the global loop bound was reached.
    if(_GLF_global_loop_count != _GLF_global_loop_bound)
    {
        _GLF_color = vec4(_int_0);
    }
}
