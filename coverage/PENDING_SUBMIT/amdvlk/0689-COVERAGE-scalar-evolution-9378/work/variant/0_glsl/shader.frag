#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_9 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_2 _GLF_uniform_int_values[4]
#define _int_3 _GLF_uniform_int_values[5]
#define _int_4 _GLF_uniform_int_values[6]
#define _int_5 _GLF_uniform_int_values[7]
#define _int_6 _GLF_uniform_int_values[8]
#define _int_7 _GLF_uniform_int_values[9]
#define _int_8 _GLF_uniform_int_values[10]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [1, 9, 10, 0, 2, 3, 4, 5, 6, 7, 8]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[11];
};

// Contents of zero: 0
layout(set = 0, binding = 2) uniform buf2 {
    int zero;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
    int a = _int_0;

    // Iterates two times.
    for(int i = 1; i < _int_3; i ++)
    {
        // Always false.
        if(a >= _int_1)
        {
            break;
        }

        // Always false.
        if(zero < _int_0)
        {
            a++;
        }

        int b = _int_1;

        // Iterates once.
        do
        {
            // Iterates six times until breaks because of b >= 7.
            for(int j = 0; j < _int_10; j++)
            {
                if(b >= _int_7)
                {
                    break;
                }

                b++;

                // True when j is zero.
                if(j < i + 1)
                {
                    continue;
                }

                arr[j] = arr[_int_1];
            }
        }
        while(gl_FragCoord.y < _float_0_0);
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    // Verify results and set color to black if failed.
    int ref[10] = int[10](_int_0, _int_1, _int_1, _int_1, _int_1, _int_1, _int_6, _int_7, _int_8, _int_9);
    for(int i = _int_0; i < _int_10; i ++)
    {
        if(arr[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
