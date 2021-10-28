#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 10, 5]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
    highp vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

struct S
{
    int data;
};

S arr[10] = S[10](S(1), S(1), S(1), S(1), S(1), S(1), S(1), S(1), S(1), S(1));

void func(inout S s)
{
    // Always false.
    if(injectionSwitch.x > injectionSwitch.y)
    {
        return;
    }

    // Always false.
    if(gl_FragCoord.y < 0.0)
    {
        return;
    }

    s.data = 0;
}

void main()
{
    func(arr[_int_1]);
    bool b = false;

    // Always false.
    if(injectionSwitch.x > injectionSwitch.y)
    {
        b = true;
    }

    // Always true.
    if(!b)
    {
        int idx = 0;

        for(int i = 0; i < _int_5; i++)
        {
            arr[idx].data = _int_1;
            func(arr[i]);
        }
    }

    // The first five elements had data set to zero, but also the first element was set back to one in iterations i = 1..4.
    int ref[10] = int[10](_int_1, _int_0, _int_0, _int_0, _int_0, _int_1, _int_1, _int_1, _int_1, _int_1);

    // Check the results and set an output color to black if the check fails.
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    for(int i = _int_0; i < _int_10; i++)
    {
        if(arr[i].data != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
