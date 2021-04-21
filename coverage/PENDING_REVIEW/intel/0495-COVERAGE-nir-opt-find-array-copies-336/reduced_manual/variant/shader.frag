#version 320 es

#define _int_8 _GLF_uniform_int_values[0]
#define _int_10 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_2 _GLF_uniform_int_values[4]
#define _int_3 _GLF_uniform_int_values[5]
#define _int_4 _GLF_uniform_int_values[6]
#define _int_5 _GLF_uniform_int_values[7]
#define _int_6 _GLF_uniform_int_values[8]
#define _int_7 _GLF_uniform_int_values[9]
#define _int_9 _GLF_uniform_int_values[10]
#define _int_17 _GLF_uniform_int_values[11]
#define _int_11 _GLF_uniform_int_values[12]
#define _int_15 _GLF_uniform_int_values[13]
#define _int_16 _GLF_uniform_int_values[14]
#define _int_12 _GLF_uniform_int_values[15]
#define _int_13 _GLF_uniform_int_values[16]
#define _int_14 _GLF_uniform_int_values[17]
#define _int_18 _GLF_uniform_int_values[18]
#define _int_19 _GLF_uniform_int_values[19]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [8, 10, 1, 0, 2, 3, 4, 5, 6, 7, 9, 17, 11, 15, 16, 12, 13, 14, 18, 19]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[20];
};

// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1
{
    int one;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr0[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
    int arr1[10] = int[10](_int_10, _int_11, _int_12, _int_13, _int_14, _int_15, _int_16, _int_17, _int_18, _int_19);

    for(int a = _int_6; a < _int_8; a++)
    {
        int limiter0 = _int_0;
        while(limiter0 < _int_2)
        {
            limiter0++;

            int limiter1 = _int_1;
            // Iterated for b = 0..3.
            for(int b = _int_0; b < _int_10; b ++)
            {
                if(limiter1 > _int_3)
                {
                    break;
                }
                limiter1++;
                arr0[b] = arr1[a];
            }
        }

        int limiter2 = 0;
        // Does the same assignment five times.
        while(limiter2 < 5)
        {
            limiter2++;
            arr0[1] = arr1[1];
        }

        // Iterated once.
        do
        {
            int limiter3 = 0;
            // Iterated for d = 0..4.
            for(int d = 0; d < 10; d ++)
            {
                if(limiter3 > 4)
                {
                    break;
                }
                limiter3 ++;
                arr1[d] = arr0[d];
            }
        }
        while(_int_1 == _int_0);
    }

    // Reference values.
    int ref0[10] = int[10](_int_17, _int_11, _int_17, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
    int ref1[10] = int[10](_int_17, _int_11, _int_17, _int_3, _int_4, _int_15, _int_16, _int_17, _int_18, _int_19);

    // Return red if no error is detected.
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    for(int i = _int_0; i < _int_10; i ++)
    {
        // Unexpected value. Change the color to black.
        if(arr0[i] != ref0[i] || arr1[i] != ref1[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
