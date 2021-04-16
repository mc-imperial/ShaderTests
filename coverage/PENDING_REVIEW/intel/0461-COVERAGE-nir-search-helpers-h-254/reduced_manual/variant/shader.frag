#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1540_7 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]
#define _float_3_0 _GLF_uniform_float_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [1540.7, 2.0, 3.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[3];
};

// Contents of resolution: [256.6, 256.5]
layout(set = 0, binding = 2) uniform buf2
{
    vec2 resolution;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float f = _float_2_0 * resolution.x + _float_3_0 * round(resolution.x) + resolution.y;

    // Always true.
    if(f == _float_1540_7)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
