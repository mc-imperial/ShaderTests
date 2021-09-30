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

// Contents of quarter: 0.25
layout(set = 0, binding = 2) uniform buf2
{
    float quarter;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    _GLF_color = vec4(_int_0);

    for(int i = 1; i < 9; i++)
    {
        for(int j = 1; j < 10; j++)
        {
            if(i > _int_1)
            {
                continue;
            }

            // Always false.
            if(_float_1_0 / quarter < _float_1_0)
            {
                return;
            }
        }
    }

    // The execution always reaches this point.
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
}
