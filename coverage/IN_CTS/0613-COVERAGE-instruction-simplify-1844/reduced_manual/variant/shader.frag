#version 320 es

#define _int_2 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_6 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [2, 1, 0, 6]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

int arr0[10] = int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0), arr1[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

layout(location = 0) out vec4 _GLF_color;

void func(int x, int y)
{
    // Sets arr1[1..5] = arr0[1] = 0.
    for(int i = _int_1; i < _int_6; i++)
    {
        arr1[i] = arr0[_int_1];
    }

    int a = 0;

    // Sets arr0[x..min(x+8, 9)] = arr1[1] = 0.
    for(int i = x; i < y; i++)
    {
        if(a++ > 6)
        {
            break;
        }

        arr0[i] = arr1[_int_1];
    }
}

void main()
{
    int a = 1;

    // Iterates i = 1, 2, 2, 2, 2.
    for(int i = 1; a < 6; i = _int_2, a++)
    {
        // Iterates j = 1..9 during the first round, and
        // j = 1, 3, 5, 7, 9 for the other rounds.
        for(int j = 1; j < 10; j += i)
        {
            func(j, 10);
        }
    }

    // Sets _GLF_color to (1, 0, 0, 1).
    _GLF_color = vec4(arr1[_int_0], arr0[_int_0], arr1[_int_1], arr1[_int_6]);
}
