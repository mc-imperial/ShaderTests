#version 320 es

#define _int_5 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [5, 1, 0, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

layout(location = 0) out vec4 _GLF_color;

struct S
{
    int data[5];
};

void main()
{
    S obj = S(int[5](1, _int_1, _int_1, _int_1, _int_1));
    int arr[5] = int[5](_int_0, _int_0, _int_0, _int_0, _int_0);

    for(int i = _int_0; i < _int_5; i++)
    {
        int a = _int_0;
        int b = arr[_int_1];
        int c = _int_1;

        // Always true.
        if(obj.data[b] <= 1)
        {
            c++;
        }

        // arr[i] = 2 + i
        arr[a + i] = c + i;
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    // Check the results and set the color to black if failed.
    for(int i = _int_0; i < _int_5; i++)
    {
        if(arr[i] != i + _int_2)
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
