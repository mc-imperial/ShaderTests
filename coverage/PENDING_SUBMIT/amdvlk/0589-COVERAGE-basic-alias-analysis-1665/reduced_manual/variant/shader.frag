#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1
{
    int zero;
};

layout(location = 0) out vec4 _GLF_color;

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

struct S
{
    int data0;
    int data1;
};

S arr[10] = S[10](S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1));

void func(inout S s)
{
    s.data0 = _int_0;
}

void main()
{
    // Iterated once.
    for(int i = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; i++)
    {
        _GLF_global_loop_count++;

        // Iterates until the global loop bound is reached.
        for(int j = zero; j != _int_1 && _GLF_global_loop_count < _GLF_global_loop_bound; )
        {
            _GLF_global_loop_count++;
        }

        // Always true.
        if(arr[i].data0 >= _int_1)
        {
            // Always false.
            if(arr[i].data1 == 2)
            {
                func(arr[i]);
                return;
            }
            else
            {
                func(arr[i]);
            }
        }
    }

    // Always true.
    if(arr[_int_1].data0 == _int_0 && arr[_int_2].data0 == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
