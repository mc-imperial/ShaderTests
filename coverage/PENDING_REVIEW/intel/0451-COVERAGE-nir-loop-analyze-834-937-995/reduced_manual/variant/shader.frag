#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_5 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_2_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 2.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [0, 1, 5]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 2) uniform sampler2D tex;

void main()
{
    int i = 1;
    vec4 texel = vec4(_float_1_0);

    // Iterates until i becomes 5.
    // The texture lookup reads only values in the range of 0..1
    // making the texel.z != 2.0 condition always true.
    while(!(false || (!(texel.z != _float_2_0 && i < 5))))
    {
        texel = texture(tex, vec2(_float_1_0));
        i++;
    }

    // Always true.
    if(i == _int_5)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
