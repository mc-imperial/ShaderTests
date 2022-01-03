#version 320 es
#define _int_4 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [4, 1, 2, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_0;

    // Iterated once.
    for(int i = _int_0; i < _int_1; i++)
    {
        {
            int j = _int_1, i = i;

            // Iterated twice.
            while(i <= _int_1)
            {
                a++;

                // Never iterated.
                for(j = 1; j < i; j++)
                {
                    a = _int_0;
                    // This would make the while loop infinite, but this is never executed.
                    i = (_int_4 * i) / 1000;
                }

                i++;
            }
        }
    }

    // Always true.
    if(a == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
