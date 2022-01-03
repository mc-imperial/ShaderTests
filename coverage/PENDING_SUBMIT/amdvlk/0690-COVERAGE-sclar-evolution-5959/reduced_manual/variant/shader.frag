#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_25225 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [10, 25225, 0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{

    // a becomes -25235.
    int a = -25236 | _int_1;

    // Increments a by ten.
    for(int i = _int_0; i < _int_10; i++)
    {
        a++;
    }

    // Always true.
    if(a == -_int_25225)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
