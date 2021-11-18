#version 320 es

#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)

#define _int_1 _GLF_uniform_int_values[0]
#define _int_16 _GLF_uniform_int_values[1]
#define _int_128 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 16, 128, 0]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

int arr[128] = int[128](1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
    // Iterated once.
    do
    {
        _GLF_global_loop_count++;

        int a = 0;

        // Always true.
        if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 128)] == _int_1)
        {
            a++;
        }

        // Always true.
        if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 128)] == _int_1)
        {
            while(_GLF_global_loop_count < _GLF_global_loop_bound)
            {
                _GLF_global_loop_count ++;
            }
            a++;
        }

        // Always true.
        if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 128)] == _int_1)
        {
            a++;
        }

        // Always false.
        if(a == 0)
        {
            arr[_GLF_MAKE_IN_BOUNDS_INT(_int_16, 128)] = _int_0;
        }

        // Always false.
        if(arr[_GLF_MAKE_IN_BOUNDS_INT(clamp(int(gl_FragCoord.y), _int_0, _int_128 - _int_1), 128)] == _int_0)
        {
            return;
        }
    }
    while(_GLF_global_loop_count < _GLF_global_loop_bound);

    if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_16, 128)] == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
