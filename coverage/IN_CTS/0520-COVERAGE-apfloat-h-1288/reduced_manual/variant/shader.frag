#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // -1 encodes a NaN, which makes the result of
    // intBitsToFloat undefined.
    float f = min(intBitsToFloat(-1), 1.0);

    // Always true.
    if(gl_FragCoord.x > _float_0_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        // f is undefined, but this is never executed.
        _GLF_color = vec4(f);
    }
}
