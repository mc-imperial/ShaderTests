#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push
{
    highp vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

// Returns 0 or 1 as long as x >= 0.
int func(int x)
{
    while(x > 1)
    {
        x /= 2;
    }

    return x;
}

void main()
{
    int a = int(gl_FragCoord.y);

    if(true)
    {
    }

    // Calls func with an argument of one or a positive integer based on gl_FragCoord. The return value is 0 or 1 which both index the red color.
    _GLF_color = vec4[4](vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_0), vec4(_int_0))[(injectionSwitch.y < _float_0_0) ? _int_1 : func(a)];
}
