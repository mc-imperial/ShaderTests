#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_7 _GLF_uniform_int_values[2]
#define _int_9 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_3_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 3.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [0, 1, 7, 9]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    float arr[9] = float[9](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);

    // Sets arr[7] = 3.
    for(int i = 1; i < 3; i ++)
    {
        arr[_int_7] += _float_1_0;
    }

    // Does nothing. Still needed for the coverage.
    int a = _int_1;
    while(true)
    {
        if(a ++ >= 4)
        {
            break;
        }
    }

    int idx = clamp(int(gl_FragCoord.y), _int_0, _int_9 - _int_1);

    // Always true.
    if(arr[_GLF_MAKE_IN_BOUNDS_INT(idx, 9)] == (idx == _int_7 ? _float_3_0 : _float_1_0))
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
