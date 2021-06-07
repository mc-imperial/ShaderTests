#version 320 es
#define _int_20 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _uint_60433 _GLF_uniform_uint_values[0]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]
#define _float_1_7 _GLF_uniform_float_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_uint_values: 60433
layout(set = 0, binding = 0) uniform buf0
{
    uint _GLF_uniform_uint_values[1];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0, 1.7]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[3];
};
// Contents of _GLF_uniform_int_values: [20, 1, 0, 2]
layout(set = 0, binding = 2) uniform buf2
{
    int _GLF_uniform_int_values[4];
};
// Contents of three: 3
layout(set = 0, binding = 3) uniform buf3
{
    int three;
};

layout(location = 0) out vec4 _GLF_color;

// This function does nothing as it backs up _GLF_color and writes it back.
void func0()
{
    vec4 tmp;
    // Always true.
    if(gl_FragCoord.x > _float_0_0)
    {
        tmp = _GLF_color;
    }
    _GLF_color = tmp;
}

// This function always returns 2.
int func1()
{
    int a = _int_1;

    while(a < _int_2)
    {
        // Always true.
        if(three > _int_1)
        {
            func0();
            a = _int_2;
        }
        else
        {
            func0();
        }
    }

    return a;
}

void main()
{
    // Always true.
    if(gl_FragCoord.x > _float_0_0)
    {
        _GLF_color = vec4(_float_1_0, _float_0_0, _float_1_0, _float_1_7);
    }
    else
    {
        _GLF_color = unpackSnorm4x8(_uint_60433);
    }

    int a = _int_0;
    for(int i = 0; i < 5; i ++)
    {
        for(int j = 0; j < 2; j ++)
        {
            // Executed ten times. Func1 always returns 2, hence a gets incremented by total of 20.
            a += func1();
        }
    }

    // Always true.
    if(a == _int_20)
    {
        _GLF_color.z -= _float_1_0;
    }
}
