#version 320 es

#define _int_33 _GLF_uniform_int_values[0]
#define _int_157 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_9 _GLF_uniform_int_values[4]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [33, 157, 1, 0, 9]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1;

    for(int i = _int_0; i < _int_33; i++)
    {
        a += int[9](1, 2, 3, 4, 5, 6, 7, 8, 9)[i % _int_9];
    }

    if(a == _int_157)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
