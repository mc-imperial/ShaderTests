#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_6 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_5 _GLF_uniform_int_values[5]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1, 6, 2, 3, 5]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[6];
};

layout(location = 0) out vec4 _GLF_color;

int func0(int x)
{
    for(int i = _int_0; i < _int_5; i++)
    {
        // This function is only called with x = 0,
        // therefore the second iteration always returns 1.
        if(x == _int_1)
        {
            return _int_1;
        }

        x++;
    }

    // This part of the function is never executed because
    // the loop above always returns one.

    // Always true.
    if(gl_FragCoord.x > 0.0)
    {
        return -1;
    }

    // Never executed.
    return 2;
}

int func1()
{
    // Always true.
    if(gl_FragCoord.y > 0.0)
    {
        // Always true.
        if(gl_FragCoord.y > length(vec3(0)))
        {
            return func0(_int_0);
        }

        // Never executed.
        if(gl_FragCoord.x > 0.0)
        {
            _GLF_color = vec4(_int_0);
        }

        // Never executed.
        if(func0(_int_6) > _int_0)
        {
            return _int_2;
        }
    }

    // Never executed.
    return _int_3;
}

void main()
{
    // Always true.
    if(func1() == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
