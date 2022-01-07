#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]
#define _int_5 _GLF_uniform_int_values[6]
#define _int_6 _GLF_uniform_int_values[7]
#define _int_7 _GLF_uniform_int_values[8]
#define _int_8 _GLF_uniform_int_values[9]
#define _int_9 _GLF_uniform_int_values[10]
#define _int_11 _GLF_uniform_int_values[11]
#define _int_12 _GLF_uniform_int_values[12]
#define _int_13 _GLF_uniform_int_values[13]
#define _int_14 _GLF_uniform_int_values[14]
#define _int_15 _GLF_uniform_int_values[15]
#define _int_16 _GLF_uniform_int_values[16]
#define _int_17 _GLF_uniform_int_values[17]
#define _int_18 _GLF_uniform_int_values[18]
#define _int_19 _GLF_uniform_int_values[19]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [10, 1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[20];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int data0[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9), data1[10] = int[10](_int_10, _int_11, _int_12, _int_13, _int_14, _int_15, _int_16, _int_17, _int_18, _int_19);

    data1[_int_1] = data0[_int_1];

    for(int i = _int_2; i < _int_10; i += _int_2)
    {
        for(int j = _int_1; j < _int_10; j += (i / _int_2))
        {
            // Iterates once with k = j if j <= 5.
            for(int k = j; k <= min(j, 5); k ++)
            {
                data0[k] = data1[k];
            }
        }
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    // Compare against reference values and set output to black if failed.
    int ref[10] = int[10](_int_0, _int_1, _int_12, _int_13, _int_14, _int_15, _int_6, _int_7, _int_8, _int_9);

    for(int i = _int_0; i < _int_10; i ++)
    {
        if(data0[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
