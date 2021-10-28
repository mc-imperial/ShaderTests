#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 10, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 15;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

int arr0[10] = int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0), arr1[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
    // Sets arr[1..9] to zero.
    for(int j = _int_1; j < _int_10; j ++)
    {
        _GLF_global_loop_count ++;
        arr1[j] = arr0[j];
    }

    for(int i0 = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; i0 *= _int_2)
    {
        _GLF_global_loop_count++;
        for(int i1 = 1; i1 < 10 && _GLF_global_loop_count < _GLF_global_loop_bound; i1 += i0)
        {
            _GLF_global_loop_count ++;
            for(int i2 = i1; i2 <= 1 && _GLF_global_loop_count < _GLF_global_loop_bound; i2++)
            {
                _GLF_global_loop_count++;
                // i2 can only be one, and both arr0[1] and arr1[1] are already zero.
                arr0[i2] = arr1[i2];
            }
        }
    }

    // Always true.
    if(arr0[_int_0] == _int_0 && arr1[_int_0] == _int_1 && arr0[_int_1] == _int_0 && arr1[_int_1] == _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
