#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_7 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp int;
precision highp float;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[2];
};

// Contents of _GLF_uniform_int_values: [1, 0, 7, 3]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

struct S
{
    float unused[10];
    float data[10];
};

void main()
{
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    float arr[7] = float[7](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);

    for(int i = _int_0; i < _int_3; i++)
    {
        // Always true.
        if(gl_FragCoord.x > _float_0_0)
        {
            S s = S(float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0), float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0));

            // Sets s.data elements to zero except for the first element which is kept as one.
            for(int j = _int_0; j < _int_7; j++)
            {
                s.data[s.data[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 10)] > _float_0_0 ? _int_1 : j] = _float_0_0;
                arr[j] = s.data[j];
            }
        }
    }

    // Verify the results and set output to black if failed.
    float ref[7] = float[7](_float_1_0, _float_0_0, _float_0_0, _float_0_0, _float_0_0, _float_0_0, _float_0_0);
    for(int i = _int_0; i < _int_7; i++)
    {
        if(arr[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
