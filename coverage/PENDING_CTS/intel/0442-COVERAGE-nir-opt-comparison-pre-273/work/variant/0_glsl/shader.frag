#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_4 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_256_0 _GLF_uniform_float_values[2]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [0.4, 1.0, 256.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    // Always false.
    if(gl_FragCoord.y < _float_0_4)
    {
        _GLF_color = vec4(_int_0);
    }
    else
    {
        // gl_FragCoord has the decimal part of 0.5. If we name the integer part
        // of gl_FragCoord (X, Y) it can be expressed as (X + 0.5, Y + 0.5).
        //
        // The value of v is calculated as follows:
        // v = ((X + 0.5, Y + 0.5) - (1.0, 0.4)) * 256
        //   = (X - 1 + 0.5, Y + 0.5 - 0.4) * 256
        //   = (X - 0.5, Y + 0.1) * 256
        //   = (X * 256 - 128, Y * 256 + 25.6)
        //
        // X * 256 is always an even number, and substracting 128 still keeps it even.
        // Y * 256 is always and even number, but adding 25.6 (and converting to an integer)
        // makes it always odd.
        ivec2 v = ivec2((gl_FragCoord.xy - vec2(_float_1_0, _float_0_4)) * _float_256_0);

        // v.x is even and v.y is odd. We substract one from v.y making it even too.
        // Doing a bitwise AND with an even number always resuls in zero.
        _GLF_color = vec4(_float_1_0, (v.y - _int_1) & _int_1, v.x & _int_1, _float_1_0);
    }
}
