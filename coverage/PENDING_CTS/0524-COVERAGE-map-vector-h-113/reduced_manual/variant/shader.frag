#version 320 es

#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [10, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
    int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[10] = int[10](1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    int a = 0;

    // Always true.
    if (arr[_int_1] == _int_1)
    {
        // An empty for loop doing nothing.
        for(int i = _int_0; i < _int_10; i++) {}
        a++;
    }

    // Always true because -1 % a = -1 % 1 = 0.
    if (-1 % a == _int_0)
    {
        arr[ivec2(_int_1).y] = _int_0;
    }

    // Always true.
    if (arr[_int_1] == _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
