#version 320 es

#define _int_100 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [100, 0, 1, 4]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    mat4 m0 = mat4(_int_0);

    for(int c = _int_1; c < _int_100; c++)
    {
        // m1 has no dependency outside this block.
        mat4 m1 = m0;

        m1[c % _int_4][_int_1] = _float_1_0;
        m0[c % _int_4][_int_1] = _float_1_0;
    }

    // Always true.
    if(m0 == mat4(_int_0, _int_1, _int_0, _int_0, _int_0, _int_1, _int_0, _int_0, _int_0, _int_1, _int_0, _int_0, _int_0, _int_1, _int_0, _int_0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
