#version 320 es

precision highp int;
precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    if(true)
    {
    }

    if(0x3f800000 == floatBitsToInt(1.0))
    {
        _GLF_color = vec4(1, 0, 0, 1);
    }
    else
    {
        _GLF_color = vec4(0);
    }

}
