#version 320 es
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [10, 1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int i = _int_1;

    do
    {
        switch(i)
        {
            // This case is never his because i starts from one.
            case 0:
                if(bitCount(findMSB(_int_1)) > 1)
                {
                    // This would cause an infinite loop, but it's never executed.
                    continue;
                }
        }
        i++;
    }
    while((i < _int_10));

    // Always true.
    if(i == _int_10)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
