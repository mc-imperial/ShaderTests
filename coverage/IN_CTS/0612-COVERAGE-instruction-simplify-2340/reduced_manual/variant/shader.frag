#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_4 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _float_2_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 4, 1, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

// Contents of _GLF_uniform_float_values: [2.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2
{
    highp vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float arr[10] = float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);

    // Always false.
    if(injectionSwitch.x > injectionSwitch.y)
    {
    }
    else
    {
        // Always false.
        if(gl_FragCoord.x < 0.0)
        {
        }
        else
        {
            // Always false.
            if(injectionSwitch.x > injectionSwitch.y)
            {
            }
            else
            {
                // arr[1] becomes 2.0.
                arr[_int_2 / findLSB(_int_4)] = _float_2_0;
            }
        }
    }

    // Always true.
    if(arr[_int_0] == _float_1_0 && arr[_int_1] == _float_2_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
