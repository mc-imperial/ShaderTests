#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_3 _GLF_uniform_int_values[1]
#define _int_256 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [0, 3, 256, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    _GLF_color = vec4(_int_0);

    for(int k = ~_int_0; k > ~ _int_0 - _int_3; k--)
    {
        // Always true.
        if(uint(~k) < uint(int(gl_FragCoord.y + _float_1_0) * _int_256))
        {
            _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
            break;
        }
    }
}
