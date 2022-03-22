#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_5 _GLF_uniform_int_values[1]
#define _int_30 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_6 _GLF_uniform_int_values[4]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 5, 30, 1, 6]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

// Contents of two: 2
layout(push_constant) uniform buf_push
{
    int two;
};

layout(location = 0) out vec4 _GLF_color;

// Always returns 6.
int func()
{
    int a = _int_1;

    // Iterated twice.
    for(int j = 0; j != two >> 1; j++)
    {
        while(a < _int_6)
        {
            a++;
        }
    }
    return a;
}

void main()
{
    int a = _int_0;
    int b = _int_0;

    while(a < _int_5)
    {
        a++;
        b += func();
    }

    // Always true.
    if(b == _int_30)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
