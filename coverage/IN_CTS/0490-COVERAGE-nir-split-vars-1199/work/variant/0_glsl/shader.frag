#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 10]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

struct S
{
    int data;
};

void func(inout S s, int x)
{
    // Always false.
    if (_int_1 == _int_0)
    {
        return;
    }

    s.data = x;
}

void main()
{
    // This variable needs to be uninitialized to hit the coverage point.
    // However, the uninitialized values are never read.
    int index;

    S arr[10];
    for (int i = 0; i < 10; i++)
        arr[i].data = 0;

    // Always false.
    if (_int_1 == _int_0)
    {
        // Uninitialized value access that is never executed.
        func(arr[index], index);
    }
    else
    {
        func(arr[_int_0], _int_1);
    }

    // Always true.
    if (arr[_int_0].data == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
