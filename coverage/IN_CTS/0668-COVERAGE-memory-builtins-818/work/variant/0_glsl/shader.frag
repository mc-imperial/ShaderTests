#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_9 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_32 _GLF_uniform_int_values[4]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 9, 10, 0, 32]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[5];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[32] = int[32](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

    // Iterated once.
    for(int i = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; )
    {
        _GLF_global_loop_count ++;

        // Always true.
        if(_int_1 > _int_0)
        {
            break;
        }
    }

    // Iterated nine times until global loop count is reached.
    for(int i = _int_1; i < _int_32 && _GLF_global_loop_count < _GLF_global_loop_bound; i++)
    {
        _GLF_global_loop_count++;
        // arr[i] = arr[i - 1];
        arr[i] += arr[i - (_int_1 >> _int_0)];
    }

    // Always true.
    if(arr[_int_9] == _int_10 && arr[_int_10] == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
