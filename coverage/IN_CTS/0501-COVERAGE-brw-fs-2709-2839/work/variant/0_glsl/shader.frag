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

// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1
{
    int one;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    mat4 m0;
    // Initialize color to a wrong value.
    _GLF_color = vec4(_int_0);

    for (int i = 0; i < 5; i++)
    {
        // m0 is uninitalized, but the identity matrix is always chosen.
        mat4 m1 = one == _int_1 ? mat4(1) : m0--;

        // Always true.
        if (determinant(m1) == 1.0)
        {
            _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
        }
    }
}
