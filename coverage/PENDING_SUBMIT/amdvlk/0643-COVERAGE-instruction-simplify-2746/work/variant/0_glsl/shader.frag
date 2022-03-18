#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_2 _GLF_uniform_int_values[1]
#define _int_3 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _int_0 _GLF_uniform_int_values[4]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 2, 3, 4, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    ivec4 v = ivec4(_int_1, _int_2, _int_3, _int_4);

    // Iterates i = 1, 0.
    for(int i = 1; i >= 0; i --)
    {
        // Iterates j = 1 when i = 1, and j = 1, 0 when i = 0.
        for(int j = (gl_FragCoord.y >= _float_0_0) ? 1 : i; j >= i; j --)
        {
            // v[0] gets decreased twice and v[1] once.
            v[i]--;
        }
    }

    // Always true.
    if(v == ivec4(-_int_1, _int_1, _int_3, _int_4))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
