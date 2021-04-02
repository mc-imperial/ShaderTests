#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_100_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [100.0, 1.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec2 v0 = vec2(_float_1_0, -580.015);
    vec2 v1 = clamp(ceil(v0), vec2(-_float_100_0), vec2(100.0));

    if(v1.y == -_float_100_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
