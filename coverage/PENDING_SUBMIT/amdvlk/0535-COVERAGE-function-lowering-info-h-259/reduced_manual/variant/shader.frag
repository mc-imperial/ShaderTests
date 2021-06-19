#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_255_0 _GLF_uniform_float_values[2]
#define _float_256_0 _GLF_uniform_float_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 1.0, 255.0, 256.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[4];
};
// Contents of _GLF_uniform_int_values: [0, 1, 4]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};
// Contents of one: 1.0
layout(push_constant) uniform buf_push
{
    float one;
};

layout(set = 0, binding = 2) uniform sampler2D tex;
layout(location = 0) out vec4 _GLF_color;

void main()
{
    vec2 coord = vec2(_float_0_0);
    vec4 texel = texture(tex, coord);
    _GLF_color = vec4(_int_0);

    for(int i = _int_0; i < int(one); i++)
    {
        // Texture has a red channel that changes from zero to one in u direction.
        // The first time it's sampled from u = 0 which gives a value of zero.
        // The second time the sampled location has chaned to the other edge
        // where it samples 1.0 and therefore exits the loop.
        while(texel.x < _float_1_0)
        {
            for(int i = _int_0; i < _int_1; i ++)
            {
                // Always true.
                if(gl_FragCoord.y > _float_0_0)
                {
                }
                else
                {
                    // This branch is never executed.
                    for(int i = _int_1; i > _int_0; i--)
                    {
                        for(int i = _int_0; i != _int_1; i++)
                        {
                            for(int i = _int_0; i < int(one); i++)
                            {
                                if(gl_FragCoord.y > _float_0_0)
                                {
                                }
                                else
                                {
                                    coord = vec2(_float_1_0);
                                }
                            }
                        }
                    }
                }
            }

            // Jump to the opposite corner of the texture where
            // it will sample 1.0 for the red channel.
            coord = coord + _float_255_0 / _float_256_0;
            for(int i = _int_0; i < _int_1; i ++)
            {
                for(int i = _int_1; i != _int_0; i --)
                {
                    texel = texture(tex, coord);
                    _GLF_color = vec4(texel.x, _int_0, _int_0, _int_1);
                }
            }

            // This does nothing.
            for(int i = _int_0; i < _int_1; i ++)
            {
                for(int i = _int_0; i != _int_1; i ++)
                {
                }
            }
        }
    }
}
