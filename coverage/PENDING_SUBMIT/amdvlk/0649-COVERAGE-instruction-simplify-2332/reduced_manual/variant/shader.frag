#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int x = int(gl_FragCoord.x);
    // a becomes 0 or 1.
    int a = (x & _int_1) | (x & _int_1);

    // Always selects a color from index 0 or 1.
    _GLF_color = vec4[4](vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_0), vec4(_int_0))[a];
}
