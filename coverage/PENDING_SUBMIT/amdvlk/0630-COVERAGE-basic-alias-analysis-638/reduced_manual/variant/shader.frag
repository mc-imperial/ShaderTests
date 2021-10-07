#version 320 es

#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_10 _GLF_uniform_int_values[3]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_0_0 _GLF_uniform_float_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0, 10]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

// Contents of _GLF_uniform_float_values: [2.0, 1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[3];
};

// Contents of zero: 0.0
layout(set = 0, binding = 2) uniform buf2
{
    float zero;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float data[10] = float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);

    // Set elements 1..9 to zero.
    for(int i = _int_1; i < _int_10; i ++)
    {
        data[i] = zero;
    }

    for(int i = 0; i < 9; i ++)
    {
        // True for i = 1.
        if(data[i] < _float_1_0)
        {
            data[i] = _float_2_0;
            break;
        }
    }

    // Always true.
    if(data[_int_0] == _float_1_0 && data[_int_1] == _float_2_0 && data[_int_2] == _float_0_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
