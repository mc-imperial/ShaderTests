#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_10 _GLF_uniform_int_values[1]
#define _int_10000 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_1 _GLF_uniform_int_values[4]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [3, 10, 10000, 0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_10000;

    // Divides a by 10 three times.
    for(int i = _int_0; i < _int_3; i++)
    {
        a = max(a / _int_10, a / _int_10);
    }

    // Always true.
    if(a == _int_10)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
