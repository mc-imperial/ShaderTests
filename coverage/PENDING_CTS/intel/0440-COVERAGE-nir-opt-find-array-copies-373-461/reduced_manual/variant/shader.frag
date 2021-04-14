#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_3_0 _GLF_uniform_float_values[0]
#define _float_4_0 _GLF_uniform_float_values[1]
#define _float_1_0 _GLF_uniform_float_values[2]
#define _float_2_0 _GLF_uniform_float_values[3]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [3.0, 4.0, 1.0, 2.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = _int_1;
    vec4 v = vec4(_float_1_0);
    mat3x4 m = mat3x4(_float_2_0);
    m[a][a] = _float_3_0;
    v[a] += mat4(m)[a][a];

    if(v.y == _float_4_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
