#version 320 es
#define _int_6 _GLF_uniform_int_values[0]
#define _int_7 _GLF_uniform_int_values[1]
#define _int_8 _GLF_uniform_int_values[2]
#define _int_9 _GLF_uniform_int_values[3]
#define _int_10 _GLF_uniform_int_values[4]
#define _int_11 _GLF_uniform_int_values[5]
#define _int_12 _GLF_uniform_int_values[6]
#define _int_13 _GLF_uniform_int_values[7]
#define _int_14 _GLF_uniform_int_values[8]
#define _int_15 _GLF_uniform_int_values[9]
#define _int_16 _GLF_uniform_int_values[10]
#define _int_2 _GLF_uniform_int_values[11]
#define _int_3 _GLF_uniform_int_values[12]
#define _int_1 _GLF_uniform_int_values[13]
#define _int_0 _GLF_uniform_int_values[14]
#define _int_4 _GLF_uniform_int_values[15]
#define _int_5 _GLF_uniform_int_values[16]
#define _int_17 _GLF_uniform_int_values[17]
#define _int_18 _GLF_uniform_int_values[18]
#define _int_19 _GLF_uniform_int_values[19]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 2, 3, 1, 0, 4, 5, 17, 18, 19]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[20];
};

// Contents of three: 3
layout(set = 0, binding = 1) uniform buf1
{
    int three;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr0[10] = int[10](0, _int_1, 2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9), arr1[10] = int[10](_int_10, _int_11, _int_12, _int_13, _int_14, _int_15, _int_16, _int_17, _int_18, _int_19);
    int k = _int_0, j = _int_0;

    // Iterates three times and copies elements 0..2 from arr0 to arr1.
    for(int i = 0; i < three; i++)
    {
        arr1[k++] = arr0[j++];
    }

    // No effect: the values are already equal.
    arr0[1] = arr1[1];

    // Always true.
    if(arr0[0] == 0 && arr0[1] == 1 && arr0[2] == 2 && arr1[0] == _int_0 && arr1[1] == 1 && arr1[_int_2] == _int_2 && arr1[_int_3] == _int_13)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
