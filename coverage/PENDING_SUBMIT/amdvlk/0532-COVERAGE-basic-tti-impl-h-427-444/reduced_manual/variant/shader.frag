#version 320 es
#define _int_16 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_7 _GLF_uniform_int_values[4]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [16, 1, 0, 2, 7]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[16] = int[16](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

    // bitfieldExtract returns zero, making the loop iterate three times.
    for(int i = _int_2; i >= bitfieldExtract(_int_1, _int_1, _int_1); i--)
    {
        int a = _int_1;

        // True for the first iteration.
        if(arr[_int_1] == _int_1)
        {
            arr[a] = i;
        }

        for(int j = _int_2; j < _int_7; j++)
        {
            arr[j] = 0;
        }
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    int ref[16] = int[16](_int_1, _int_2, _int_0, _int_0, _int_0, _int_0, _int_0, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

    // Check for the expected results.
    for(int i = _int_0; i < _int_16; i++)
    {
        if(arr[i] != ref[i])
        {
            // Failure.
            _GLF_color = vec4(_int_0);
        }
    }
}
