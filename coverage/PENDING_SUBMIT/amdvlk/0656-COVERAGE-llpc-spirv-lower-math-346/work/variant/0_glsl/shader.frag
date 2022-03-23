#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_10_0 _GLF_uniform_float_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of _GLF_uniform_float_values: [0.0, 1.0, 10.0]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[3];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

float a = 1.0;
float b = 1.0;

void func()
{
    // Always true.
    if(gl_FragCoord.y > _float_0_0)
    {
        // Always true.
        if(gl_FragCoord.y > _float_0_0)
        {
            while(_GLF_global_loop_count < _GLF_global_loop_bound)
            {
                _GLF_global_loop_count++;
            }

            a = 256.0;
        }

        // c becomes b = 1.
        float c = 256.0 - a + b;
        // Clamps 10.0 between 0 and 1.0 resulting in 1.0.
        b = clamp(_float_10_0, _float_0_0, c);
    }
}

void main()
{
    func();
    func();

    // Always true.
    if(b == _float_1_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
