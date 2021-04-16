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

// Contents of zero: 0.0
layout(set = 0, binding = 2) uniform buf2 {
    float zero;
};

layout(location = 0) out vec4 _GLF_color;

bool func(vec2 pos)
{
    // Always false.
    if(pos.x < _float_0_0)
    {
        return true;
    }

    // Always true.
    if(pos.y > _float_0_0)
    {
        return false;
    }

    if(zero > _float_1_0)
    {
        return true;
    }

    return true;
}

void main()
{
    // Always false.
    if (func(gl_FragCoord.xy))
    {
        discard;
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
}
