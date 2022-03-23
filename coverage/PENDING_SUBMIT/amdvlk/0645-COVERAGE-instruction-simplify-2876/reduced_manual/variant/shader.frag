#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_8 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 8]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_0;

    // Iterates i = 1, 2, 4, 8.
    for(int i = 1; i <= 10; i *= 2)
    {
        for(int j = 0; j < 10; j += i)
        {
            int b = j + i - 1;
            // For the last iteration of the outer loop i = 8 and j iterates values 0 and 8.
            // The last assignment to a is 8.
            a = j;


            // The condition of the while loop below can be opened as follows:
            // a <= b <= 1
            // j <= j + i - 1 <= 1
            //
            // Because j <= 1 the values for j can be 0 and 1.
            // Therefore j + i - 1 <= 1 gives us:
            // 0 + i - 1 <= 1
            // i <= 2
            // and
            // 1 + i - 1 <= 1
            // i <= 1
            //
            // i starts at one so the condition is true when i = 1 or 2 and j = 0 or 1.

            // This condition is false during the last iteration of i = 8 and j = 8.
            while(a <= b && b <= 1)
            {
                // Always false.
                if(gl_FragCoord.x < _float_0_0)
                {
                    discard;
                }
                a++;
            }
        }
    }

    // Always true. The last iteration assigned i = 8 but didn't increment it in a while loop.
    if(a == _int_8)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
