#version 310 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_0_2 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_0_0 _GLF_uniform_float_values[2]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: [0.2, 1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[3];
};

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec2 c;

    // Z component is undefined but doesn't matter because only the x and y components
    // are used for setting the color.
    vec3 v1 = vec3(_float_1_0, _float_0_0, int(c.x - 1.0));

    int a = _int_1;

    // b becomes 1.
    int b = clamp(a, _int_0, _int_2);

    vec3 v2[2];
    v2[_int_0] = v1 - _float_0_2;
    v2[b] = v1;

    _GLF_color = vec4(v2[_int_1].x, v2[_int_1].y, v2[_int_1].y, v2[_int_1].x);
}
