#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_5 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_2 _GLF_uniform_int_values[5]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 5, 4, 3, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[6];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1;
    int b = _int_1;

    // Iterated once.
    while(b >= _int_1)
    {
        b--;

        // Iterated once with b = 0.
        for(int i = _int_1; i != 0; i--)
        {
            // a becomes 5 and b -1.
            a = int[5](_int_5, _int_4, _int_3, _int_2, _int_1)[b--];
        }

        // Always true.
        if(a > _int_1)
        {
            // b becomes 0.
            b++;
        }
    }

    // Always true.
    if(a == _int_5 && b == _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
