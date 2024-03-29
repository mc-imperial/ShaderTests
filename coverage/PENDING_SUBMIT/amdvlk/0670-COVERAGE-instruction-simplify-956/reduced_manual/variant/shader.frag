#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a;
    float f = _float_0_0;

    // Always false.
    if(gl_FragCoord.x < _float_0_0)
    {
        // a is undefined, but this is never executed.
        f = ldexp(_float_1_0, (a / int(gl_FragCoord.x)));
    }

    // Always true.
    if(f == _float_0_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
