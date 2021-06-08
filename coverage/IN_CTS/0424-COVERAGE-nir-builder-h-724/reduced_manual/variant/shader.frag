#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

// Contents of zero: 0
layout(set = 0, binding = 2) uniform buf2
{
    int zero;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec3 v = vec3(_int_1);
    // Static out of bound access required to hit the coverage point.
    int a = 3;

    // Always false.
    if(zero > _int_0)
    {
        // Out of bounds access but never executed.
        v[a] = _float_1_0;
    }

    _GLF_color = vec4(v[_int_1], _int_0, _int_0, _int_1);
}
