#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]
#define _int_4 _GLF_uniform_int_values[4]
#define _int_5 _GLF_uniform_int_values[5]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 2, 3, 4, 5]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[6];
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[5] = int[5](_int_0, _int_1, _int_2, _int_3, _int_4);
    int ref[5] = int[5](_int_0, _int_1, _int_2, _int_1, _int_1);

    // Copies arr[1] to indices 1, 3, and 4.
    for(int i = 0; i < 5; i++)
    {
        // Always true.
        if(_int_0 < _int_1)
        {
            i++;
        }
        arr[_GLF_MAKE_IN_BOUNDS_INT(i, 5)] = arr[_int_1];
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    // Verify results and set color to black if failed.
    for(int i = _int_0; i < _int_5; i ++)
    {
        if(arr[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
