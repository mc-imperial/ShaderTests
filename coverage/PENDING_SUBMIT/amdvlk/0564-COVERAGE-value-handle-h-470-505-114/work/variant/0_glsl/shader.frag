#version 320 es
#define _int_20 _GLF_uniform_int_values[0]
#define _int_5 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [20, 5, 0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

int func()
{
    int a = _int_0;

    for(int i = _int_1; i < _int_20; i++)
    {
        // Always false.
        if(gl_FragCoord.y < 0.0)
        {
            discard;
        }

        for(int j = 1; j < 80; j ++)
        {
            if(a >= 5)
            {
                // Always false.
                if(gl_FragCoord.y < 0.0)
                {
                    continue;
                }

                break;
            }

            a++;

            if(gl_FragCoord.x < _float_1_0)
            {
                _GLF_color = vec4(_int_1);
            }
        }
    }

    // Always returns 5.
    return a;
}

void main()
{
    _GLF_color = vec4(_int_0);

    // Always true.
    if(func() == _int_5)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
}
