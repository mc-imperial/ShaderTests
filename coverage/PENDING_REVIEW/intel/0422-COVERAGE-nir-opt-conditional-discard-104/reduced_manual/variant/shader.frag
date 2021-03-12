#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 4]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[1];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2
{
    vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = 1;
    // The color value cannot be changed later without losing
    // the coverage point we are after.
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    for(int i = _int_0; i < _int_4; i++)
    {
        if(a++ > 3)
        {
            break;
        }

        // Always false.
        if(injectionSwitch.x > _float_1_0)
        {
            discard;
        }
    }
}
