#version 320 es

precision highp int;
precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1.0
layout(set = 0, binding = 0) uniform buf0
{
    float one;
};

void main()
{
    int a = 1;

    // Iterated until the break is executed.
    while(int(one) >= 1)
    {
        if(a++ >= 5)
        {
            _GLF_color = vec4(1, 0, 0, 1);
            break;
        }
    }
}
