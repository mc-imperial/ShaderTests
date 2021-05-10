#version 320 es
precision highp float;
precision highp int;

layout(set = 0, binding = 0) uniform buf0
{
    int one;
};

layout(location = 0) out highp vec4 _GLF_color;

void main()
{

    int a = 0;

    for (int i = 0; i < 5; i++)
    {
        // Always false.
        if (one == 0)
        {
            // intBitsToFloat produces NaN. Floor of NaN is undefined, but this
            // code is never executed.
            if (floor(intBitsToFloat(0xffc00000)) > 0.0)
            {
                a = -1;
                break;
            }
        }

        a++;
    }

    // Always true.
    if (a == 5)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);

}

