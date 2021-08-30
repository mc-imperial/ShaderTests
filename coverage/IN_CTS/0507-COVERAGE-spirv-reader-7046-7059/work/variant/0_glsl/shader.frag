#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of m: [1.0, 5.0, 3.0, 7.0, 9.0, 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]
layout(push_constant) uniform buf_push
{
    mat4 m;
};

void main()
{
    // Always true.
    if(m[_int_0][_int_0] == _float_1_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
