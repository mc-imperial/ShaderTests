#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_3 _GLF_uniform_int_values[1]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 3]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[2];
};

// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1
{
    int zero;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int a = zero;
    int b = _int_1;

    // Iterated once.
    do
    {
        // Always false.
        if(b > _int_3)
        {
            break;
        }


        int arr[10] = int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

        // Makes indices 0..4 undefined as the first iteration reads outside the array
        // and other iterations copy that value.
        for(int i = 0; i < 5; i ++)
        {
            arr[i] += arr[i - 1];
        }

        b++;
        // Use an array element that still contains a defined value (one).
        a += arr[5];
    }
    while(a != _int_1);

    if (b == 2)
        _GLF_color = vec4(1, 0, 0, 1);
    else
        _GLF_color = vec4(0);
}
