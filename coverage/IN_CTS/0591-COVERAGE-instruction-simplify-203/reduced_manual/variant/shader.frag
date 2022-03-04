#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_300_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [0.0, 300.0]
layout(set = 0, binding = 1) uniform buf1 {
    float _GLF_uniform_float_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Always false.
    if(gl_FragCoord.x < _float_0_0)
    {
        for(int i = _int_1; i != _int_1; )
        {
            return;
        }
    }

    // Iterated once.
    do
    {
        // Useless line but still needed for the coverage.
        gl_FragCoord.y < _float_0_0;


        // Always false.
        if(gl_FragCoord.y >= _float_300_0)
        {
            return;
        }
    }
    while(gl_FragCoord.y < _float_0_0);

    // Selects (1, 0, 0, 1).
    _GLF_color = vec4[4](vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_0), vec4(_int_0), vec4(_int_0))[_int_0];
}
