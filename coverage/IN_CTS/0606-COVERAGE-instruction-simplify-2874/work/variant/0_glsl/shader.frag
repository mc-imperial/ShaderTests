#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_7 _GLF_uniform_int_values[1]
#define _int_9 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_10 _GLF_uniform_int_values[4]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 7, 9, 1, 10]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

layout(location = 0) out vec4 _GLF_color;

int arr0[10] = int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0), arr1[10] = int[10](1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

void func(int x, int y)
{
    int a = _int_1;
    int b = _int_1;

    // Sets arr1[1..5] to zero.
    while(x <= y)
    {
        if(b >= 6)
        {
            break;
        }

        b++;

        arr1[a++] = arr0[_int_1];
    }

    // Same as arr0[x] = arr1[x].
    for(int i = x; i <= x; i ++)
    {
        arr0[i] = arr1[i];
    }
}

void main()
{
    // Iterates only i = 1.
    for(int i = 1; i <= 1; i = 2 * i)
    {
        // Iterates j = 0, 2, 4, 6, and 8.
        for(int j = 0; j < 10; j += 2 * i)
        {
            func(j, j + i);
        }
    }

    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    // Check the results and output black if unexpected values are seen.
    int ref[10] = int[10](_int_1, _int_0, _int_0, _int_0, _int_0, _int_0, _int_7, _int_0, _int_9, _int_0);
    for(int i = _int_0; i < _int_10; i++)
    {
        if(arr0[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
