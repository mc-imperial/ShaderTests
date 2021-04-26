#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_4 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_100 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _float_5_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: [5.0, 1.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [4, 1, 100, 0]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec4 v0 = vec4(_float_1_0);
    vec4 v1 = vec4(_float_5_0);

    for(int a = _int_1; a < _int_4; a++)
    {
        for(int c = _int_0; c < _int_100; c++)
        {
            v0[_GLF_MAKE_IN_BOUNDS_INT(c, 4)] -= _float_1_0;

            // Always false.
            if(_int_1 == _int_0)
            {
                // Undefined behavior because edge0.w > edge1.w, but this is never executed.
                v1[a] = smoothstep(vec4(_float_1_0, _float_1_0, _float_1_0, 3.0), vec4(1.0), v0)[a];
            }
        }
    }

    // Always true because the x coordinate is never touched.
    if(v1.x == _float_5_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
