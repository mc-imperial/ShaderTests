#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
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

void main()
{
    _GLF_color = vec4(_int_1, _int_0, _int_0, 1);
    int a = 1;

    // Iterates until a reaches seven.
    do
    {
        if(a++ >= 7)
        {
            break;
        }

        // v = (1, 0, 0, 1)
        vec4 v = _GLF_color;

        // The original value is always restored below.
        _GLF_color = vec4(a);

        // Always true.
        if(gl_FragCoord.x >= 0.0)
        {
            _GLF_color = v;
        }
    }
    while(_int_1 > zero);
}
