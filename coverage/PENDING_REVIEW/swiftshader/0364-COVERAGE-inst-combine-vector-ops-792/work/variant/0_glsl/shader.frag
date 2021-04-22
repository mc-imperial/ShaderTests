#version 310 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [10, 0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec3 v1;
    int a = _int_10;
    int b = _int_0;
    float c = _float_1_0;

    for (int i = _int_1; b < a; i++)
    {
        b++;

        // v1 is undefined so this may be true or not.
        if (!(int(v1.x) < 1))
        {
            for (int i = _int_1; i < _int_10; i++)
            {
                b++;

                // Always true.
                if (dFdy(c) == _float_0_0)
                {
                    c = _float_0_0;
                }

                // Always false.
                if (c > _float_1_0)
                {
                    break;
                }
            }
        }
    }

    if (b == _int_10 && (c == _float_0_0 || c == _float_1_0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
