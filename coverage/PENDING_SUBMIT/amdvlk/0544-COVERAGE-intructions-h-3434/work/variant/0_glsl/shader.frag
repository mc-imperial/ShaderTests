#version 320 es

precision highp int;
precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Always returns (1, 0, 0, 1)
vec4 func()
{
    switch(0)
    {
        case 0:
            return vec4(1, 0, 0, 1);
        default:
            return vec4(0);
    }
}

void main()
{
    _GLF_color = func();
}
