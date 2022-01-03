#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1
{
    int zero;
};

layout(location = 0) out vec4 _GLF_color;

ivec2 func()
{
    ivec2 v = ivec2(zero, 2);

    // i = 0: v changes from (0, 2) to (1, 2).
    // i = 1: v changes from (1, 2) to (1, 1).
    // i = 2: v changes from (1, 1) to (1, 0).
    for(int i = 0; i < 3; i++)
    {
        if(v.x > _int_0)
        {
            v.y--;
        }

        v.x += v.y / 2;
    }

    // This loop is never iterated.
    while(v.x > 1)
    {
    }

    // Returns (1, 0).
    return v;
}

void main()
{
    // Always true.
    if(func() == ivec2(1, 0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
