#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_5 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_0 _GLF_uniform_int_values[4]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_19_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 19.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [3, 5, 2, 1, 0]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[5];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float arr[9] = float[9](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);

    for(int i = _int_1; i < _int_5; i ++)
    {
        for(int j = 2; j <= 4; j ++)
        {
            for(int k = 0; k < j; k ++)
            {
                for(int l = 0; l < 2; l ++)
                {
                    // Iterated 18 times for each value of i.
                    switch(i)
                    {
                        case 0:
                            arr[i] += _float_1_0;
                            break;
                        case 1:
                            arr[i] += _float_1_0;
                            break;
                        // Matrices only contain zero values.
                        case 2:
                            arr[i] += mat2x4(0.0)[clamp(k, _int_0, _int_1)][l];
                            break;
                        case 3:
                            arr[i] += mat3x2(0.0)[clamp(k, _int_0, _int_2)][l];
                            break;
                        case 4:
                            arr[i] += mat3(0.0)[clamp(k, _int_0, _int_2)][l];
                            break;
                        // Cases below are never executed.
                        case 5:
                            arr[i] += mat3x4(0.0)[clamp(k, 0, _int_2)][l];
                            break;
                        case 6:
                            arr[i] += mat4x2(0.0)[clamp(k, 0, 3)][l];
                            break;
                        case 7:
                            arr[i] += mat4x3(0.0)[clamp(k, 0, 3)][l];
                        // Fallthrough
                        case 8:
                            arr[i] += mat4(0.0)[clamp(k, 0, _int_3)][l];
                            break;
                    }
                }
            }
        }
    }

    // Always true.
    if(arr[_int_0] == _float_1_0 && arr[_int_1] == _float_19_0 && arr[_int_2] == _float_1_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
