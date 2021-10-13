#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _uint_1 _GLF_uniform_uint_values[0]
#define _uint_0 _GLF_uniform_uint_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
    int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_uint_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
    uint _GLF_uniform_uint_values[2];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 2) uniform buf2 {
    float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of zero: 0
layout(set = 0, binding = 3) uniform buf3 {
    uint zero;
};
void main()
{
    uint a = _uint_1;
    // b becomes one and a becomes zero.
    uint b = uaddCarry(zero, _uint_1, a);
    vec4 v = vec4(_float_0_0);

    // bitCount(a) = 0.
    v[_GLF_MAKE_IN_BOUNDS_INT(bitCount(a), 4)] = _float_1_0;

    // Always true.
    if(a == _uint_0 && b == _uint_1 && v == vec4(_int_1, _int_0, _int_0, _int_0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
