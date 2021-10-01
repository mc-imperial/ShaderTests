#version 320 es
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Returns values 1.0 or greater.
float func(float x)
{
    float f = 1.0;

    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        f += _float_1_0;
        _GLF_color = vec4(_float_0_0);

        // Always true.
        if(gl_FragCoord.x >= _float_0_0)
        {
            _GLF_color = vec4(_float_1_0);
        }

        // Always false.
        if(x < _float_0_0)
        {
            return f;
        }
    }

    return f;
}

void main()
{
    // Always false.
    if(gl_FragCoord.x < 0.1)
    {
        return;
    }

    // Always false.
    if(gl_FragCoord.y < 0.1)
    {
        return;
    }

    // v becomes (x, 0, 0, x), where x >= 1.
    vec4 v = vec4(_float_0_0);
    v.x = v.w = func(gl_FragCoord.y);

    // Always false.
    if(gl_FragCoord.x < 0.0)
    {
        return;
    }

    // Result clamps to (1, 0, 0, 1)
    _GLF_color = v;
}
