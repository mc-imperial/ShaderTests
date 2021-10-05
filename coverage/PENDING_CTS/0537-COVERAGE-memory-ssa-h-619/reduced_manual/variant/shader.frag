#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_3 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_8962_56 _GLF_uniform_float_values[2]
#define _float_3_0 _GLF_uniform_float_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 1.0, 8962.56, 3.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[4];
};
// Contents of _GLF_uniform_int_values: [0, 1, 3, 2]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2
{
    highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    float A[3] = float[3](_float_1_0, _float_1_0, _float_1_0);
    _GLF_color = vec4(_float_8962_56, _float_1_0, _float_1_0, _float_1_0);
    int i = -1;

    // Iterates through i = -1..1.
    do
    {
        // Breaks when i == 1.
        if(i > int(injectionSwitch.x))
        {
            break;
        }

        // Iterates once.
        for(int j = int(injectionSwitch.y); j > 0; j --)
        {
            // Always true.
            if(injectionSwitch.y > _float_0_0)
            {
                _GLF_color = vec4(_int_0);
            }

            // A[clamp(i, 0, 3)]++
            A[_GLF_MAKE_IN_BOUNDS_INT(i, 3)] += float[3](_float_1_0, _float_1_0, _float_1_0)[_GLF_MAKE_IN_BOUNDS_INT(i, 3)];
        }
        i++;
    }
    while(i < 50);

    // Always true.
    if(A[_int_0] == _float_3_0 && A[_int_1] == _float_1_0 && A[_int_2] == _float_1_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
}
