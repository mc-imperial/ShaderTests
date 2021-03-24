#version 320 es
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 2.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

layout(location = 0) out vec4 _GLF_color;

// Contents of zero: 0.0
layout(set = 0, binding = 1) uniform buf1
{
    float zero;
};

void main()
{
    vec2 v0 = vec2(_float_1_0);
    vec4 v1 = vec4(v0.x);

    // Always true.
    if(zero != _float_1_0)
    {
        // Always false.
        if(zero == _float_2_0)
        {
            return;
        }
        v1.yz -= _float_1_0;
    }
    else
    {
        discard;
    }

    _GLF_color = v1;
}
