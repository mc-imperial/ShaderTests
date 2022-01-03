#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of two: 2
layout(set = 0, binding = 1) uniform buf1
{
    int two;
};

layout(location = 0) out vec4 _GLF_color;

int func()
{
    while(true)
    {
        // Returns during the first iteration.
        for(int i = two; i > 0; i--)
        {
            // Always true.
            if(two > _int_1)
            {
                return _int_1;
            }
        }
    }
}

void main()
{
    int a = _int_0;

    // Always true.
    if(two > _int_1)
    {
        a = func();
    }

    // Always true.
    if(a == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
