#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_100 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 100]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    mat2x3 m23 = mat2x3(_float_0_0);

    // Iterates once because of the break.
    for (int i = 1; i < _int_100; i++)
    {
        m23[_int_1][_int_2] += _float_1_0;

        if (gl_FragCoord.y < _float_1_0)
        {
        }

        // Always true.
        if (!(true && (gl_FragCoord.x < 0.0)))
        {
            break;
        }
    }

    // Always true.
    if(m23 == mat2x3(_int_0, _int_0, _int_0, _int_0, _int_0, _int_1))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
