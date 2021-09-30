#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [3, 1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

struct S0
{
    int a;
};

struct S1
{
    S0 data0;
    // data1 is unused.
    vec4 data1;
};

// This function always returns one.
int func()
{
    S1 s;

    for(int i = _int_0; i < _int_3; i++)
    {
        s.data0.a = _int_1;
    }

    return s.data0.a;
}

void main()
{
    // Always true.
    if(func() == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
