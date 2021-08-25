#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};
// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1
{
    int zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1;
    int b = _int_1;

    // Iterated once.
    while(b > _int_0)
    {
        a = b;
        b++;

        for(int i = 0; i < 2; i++)
        {
            switch(a)
            {
                // These are never hit because a is 1.
                case 0:
                case 3:
                    discard;
            }
        }

        // Always true.
        if(zero == _int_0)
        {
            break;
        }
    }

    // Always true.
    if(a == _int_1 && b == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
