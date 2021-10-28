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

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

int arr0[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

int func()
{
    int a = _int_1;
    int b = _int_0;
    int arr1[10] = int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

    // Iterated ten times.
    while(b >= _int_0 && _GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count++;

        // Reads zero as an index and then decrements b to -1. Reads value one, so a stays at one.
        a = arr1[b--];

        // arr0[1] = arr0[0]. No effect.
        arr0[_int_1] = arr0[a];

        // Always true.
        if(a > _int_0)
        {
            // Increments b to zero and indexes with that. Writes one to arr1[0] but that value already existed.
            arr1[++b] = a;
        }
    }

    // Returns zero.
    return b;
}

void main()
{
    // Always true.
    if(func() == _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
