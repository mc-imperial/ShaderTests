#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_25 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [0.25, 1.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[2];
};

layout(location = 0) out vec4 _GLF_color;

float func(vec2 v)
{
    switch(1)
    {
        case 0:
            return 1.0;
        case 1:
            // Trasposing an identity matrix has no effect. The line below simplifies to
            // clamp(vec2(0.25, 0.25, vec2(0.5, 0.5), vec2(1.0, 1.0))).x = vec2(0.5, 0.5).x = 0.5
            return clamp(vec2(transpose(mat4(_float_0_25))), v, vec2(transpose(mat4(_float_1_0)))).x;
    }
}

void main()
{
    // The fraction parts of gl_FragCoord components are always 0.5 (the center of the pixel).
    // The function returns 0.5.
    if(func(fract(gl_FragCoord.xy)) == 0.5)
    {
        _GLF_color = vec4(1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
