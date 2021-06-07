#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]
#define _float_3_0 _GLF_uniform_float_values[2]
#define _float_4_0 _GLF_uniform_float_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 2.0, 3.0, 4.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[4];
};
// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    float arr[3] = float[3](_float_1_0, _float_2_0, _float_3_0);

    for (int i = 1; i < min(_int_2, 3); i++)
    {
        arr[_int_2] += _float_1_0;
    }

    if(arr[_int_2] == _float_4_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
