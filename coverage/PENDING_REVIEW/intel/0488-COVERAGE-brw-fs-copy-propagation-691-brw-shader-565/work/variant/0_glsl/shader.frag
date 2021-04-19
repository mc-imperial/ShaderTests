#version 320 es

#define _int_0 _GLF_uniform_int_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: 0
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[1];
};

// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1
{
    uint one;
};

layout(location = 0) out vec4 _GLF_color;

// Function is missing return value at the end,
// but this function is never called.
float func()
{
    switch(1)
    {
        case 0:
            return 1.0;
    }
}

void main()
{
    vec4 v = vec4(1.0);

    // Always false.
    if (gl_FragCoord.y < 0.0)
    {
        v = vec4(func());
    }

    // Always false.
    if (packUnorm4x8(v) == 1u)
    {
        return;
    }

    // Always true.
    if ((1u << one) == 2u)
    {
        _GLF_color = vec4(1, 0, 0, 1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
