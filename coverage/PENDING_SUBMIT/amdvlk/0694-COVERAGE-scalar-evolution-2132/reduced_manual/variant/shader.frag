#version 320 es

precision highp float;
precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = int(gl_FragCoord.x);

    for(int i = 1; i < 3; i++)
    {
        // Always false.
        if(gl_FragCoord.y < 0.0)
        {
            return;
        }
    }

    // Always false.
    if(a < 0)
    {
        a = -a;
    }

    // Loops until a is in range 0..2.
    while(a > 2)
    {
        a -= 2;

        // Always false.
        if(gl_FragCoord.y < 0.0)
        {
            break;
        }
    }

    // Correct values are at indices 0..2.
    _GLF_color = vec4[5](vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(0), vec4(0))[a];
}
