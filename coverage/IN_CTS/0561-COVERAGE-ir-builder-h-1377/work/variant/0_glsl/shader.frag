#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_3 _GLF_uniform_int_values[1]
#define _int_63 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_1 _GLF_uniform_int_values[4]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [10, 3, 63, 0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[5];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_3;

    for(int i = _int_0; i < _int_10; i ++)
    {
        // b = findMSB(256 - 1) = findMSB(255) = 7
        int b = findMSB(256 - _int_1);
        // a = a + b - 1 = a + 6
        a = a + b - _int_1;
    }

    // Always true.
    if(a == _int_63)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
