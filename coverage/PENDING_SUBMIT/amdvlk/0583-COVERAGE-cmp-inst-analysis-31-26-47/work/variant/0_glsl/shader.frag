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

// Contents of five: 5
layout(set = 0, binding = 1) uniform buf1
{
    int five;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1;
    _GLF_color = vec4(_int_0);

    // Iterated once.
    do
    {
        // Always false.
        if(_int_1 >= five)
        {
            break;
        }
        a++;
    }
    while(_int_1 < _int_1);

    // Iterated until a is 5.
    do
    {
        if(a >= five)
        {
            break;
        }
        a++;
    }
    while(a < 20);

    // Iterated once.
    do
    {
        a++;
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    while(a < _int_1);

    // The coverage points are lost if the value of a has any dependency to output color.
}
