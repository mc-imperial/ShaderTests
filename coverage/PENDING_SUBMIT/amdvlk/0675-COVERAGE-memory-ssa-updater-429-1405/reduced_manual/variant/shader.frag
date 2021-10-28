#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = 4;
    vec4 v = vec4(1.0);

    // Iterates i = 4..1. Decreases v.w by two (because of the clamp) and v.y and v.z by one.
    for(int i = a; i > 0; i--)
    {
        for(int j = a; j > 0; j--)
        {
            // Indices used: 3, 3, 2, 1.
            v[_GLF_MAKE_IN_BOUNDS_INT(i, 4)] -= _float_1_0;

            // Always false.
            if(gl_FragCoord.x < _float_0_0)
            {
                continue;
            }

            a += 1;
            break;
        }
    }

    // Always true.
    if(v == vec4(1, 0, 0, -1))
    {
        _GLF_color = vec4(1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
