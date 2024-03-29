#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Test resolution is 256 which makes fragment coordinate ANDed with 256 always zero.
    int a = ((!(!((ivec2(gl_FragCoord.xy).y & 256) != 0))) ? 0 : ~0) | ((ivec2(gl_FragCoord.xy).y & 256) != 0 ? 0 : ~0);

    // Always true.
    if(a == ~ _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
