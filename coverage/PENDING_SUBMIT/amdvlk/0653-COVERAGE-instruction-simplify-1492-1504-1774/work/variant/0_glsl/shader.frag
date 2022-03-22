#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_64 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 64]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    if(injectionSwitch.x > injectionSwitch.y)
    {
        return;
    }

    int a = 0;

    do
    {
        // Iterates twice but has no effect.
        for(int i = 1; i < findLSB(8); i++)
        {
            if(i < a)
            {
                continue;
            }

            // Always false.
            if(injectionSwitch.x > injectionSwitch.y)
            {
            }
            else
            {
                // Always false.
                if(gl_FragCoord.y < 0.0)
                {
                    discard;
                }
            }
        }

        a++;
    }
    while(a < 64);

    // Always true.
    if(a == _int_64)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
