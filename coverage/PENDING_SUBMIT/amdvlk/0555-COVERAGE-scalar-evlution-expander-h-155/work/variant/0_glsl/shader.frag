#version 320 es
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    vec2 injectionSwitch;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    for(int i = int(injectionSwitch.y); i != 0; i--)
    {
        // Always true.
        if(gl_FragCoord.x > 0.0)
        {
            _GLF_color = vec4(_float_1_0, injectionSwitch.x, _float_0_0, _float_1_0);
        }
        else
        {
            for(int j = 1; j > 0; j--)
            {
                // Similar condition as above, but never executed.
                if(gl_FragCoord.x > 0.0)
                {
                    _GLF_color = vec4(1.0);
                }
                else
                {
                    discard;
                }
            }
        }
    }
}
