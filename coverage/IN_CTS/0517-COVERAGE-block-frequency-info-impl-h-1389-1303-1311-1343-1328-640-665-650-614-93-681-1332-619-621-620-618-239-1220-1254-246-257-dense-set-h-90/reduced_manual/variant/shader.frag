#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_0_0 _GLF_uniform_float_values[2]
#define _float_300_0 _GLF_uniform_float_values[3]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [2.0, 1.0, 0.0, 300.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[4];
};
layout(location = 0) out vec4 _GLF_color;

// This function always returns 1.0.
float func(float x)
{
    while(true)
    {
        do
        {
            // Always false.
            if(gl_FragCoord.y < _float_0_0)
            {
                do
                {
                }
                while(gl_FragCoord.x < _float_0_0);
            }

            // Always true.
            if(x < _float_300_0)
            {
                return _float_1_0;
            }
        }
        while(gl_FragCoord.y < _float_0_0); // Always false.
    }
    return _float_2_0;
}

void main()
{
    // Always true.
    if(func(gl_FragCoord.x) == _float_1_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
