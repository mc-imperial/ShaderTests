#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [3, 1, 0, 2]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

// Contents of zero: 0.0
layout(set = 0, binding = 2) uniform buf2 {
    float zero;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    mat4 m = mat4(_int_1);
    m = mat4(_int_1);
    vec4 v = vec4(_int_2);
    int a = _int_0;

    for(int i = _int_1; a < _int_3; i++)
    {
        a++;

        // Iterates for j = 1 and j = 0 when i = 1.
        for(int j = _int_1; i <= _int_1 && a < _int_3; j--)
        {
            a++;

            // Executed twice:
            // v[1] = m[1][1] = 1
            // v[0] = m[0][1] = 0
            v[j] = m[j][i];

            // Always false.
            if(zero > _float_1_0)
            {
                discard;
            }
        }
    }

    // Always true.
    if(v == vec4(_int_0, _int_1, _int_2, _int_2))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
