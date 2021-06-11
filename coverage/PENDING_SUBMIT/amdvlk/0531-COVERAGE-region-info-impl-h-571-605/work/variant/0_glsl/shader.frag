#version 320 es

#define _int_5 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [5, 1, 0, 2]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[5] = int[5](_int_1, _int_1, _int_1, _int_1, _int_1);
    int a = _int_1;

    // This loop sets arr[1] = 2.
    do
    {
        int b = _int_0;

        // True after the first iteration.
        if(a > _int_1 && arr[a] == _int_1)
        {
            b++;
        }

        // Always false.
        if(gl_FragCoord.x < _float_0_0)
        {
            continue;
        }

        // True after the first iteration.
        if(b == _int_1)
        {
            break;
        }
        else
        {
            // Executed during the first iteration.
            arr[a] = _int_2;
            a++;
        }
    }
    while(true);

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    // Check for expected results.
    int ref[5] = int[5](_int_1, _int_2, _int_1, _int_1, _int_1);
    for(int i = _int_0; i < _int_5; i++)
    {
        if(arr[i] != ref[i] || a != _int_2)
        {
            // Failure.
            _GLF_color = vec4(_int_0);
        }
    }
}
