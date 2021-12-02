#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 5]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

int arr[5] = int[5](1, 1, 1, 1, 1);

layout(location = 0) out vec4 _GLF_color;

void func()
{
    int b = _int_0;

    for(int i = 0; _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
    {
        _GLF_global_loop_count++;

        if(++b > 2)
        {
            break;
        }

        int c = _int_0;

        for(int j = _int_0; _GLF_global_loop_count < _GLF_global_loop_bound; )
        {
            _GLF_global_loop_count++;

            if(++c > _int_2)
            {
                break;
            }

            // Same as arr[i] because j is always 0.
            arr[j + i] = i - 1;
        }
    }
}

void main()
{
    // Sets arr[0] to -1 and arr[1] to 0.
    func();

    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count++;

        int a = 5;

        for(int i = 1; i < 4 && _GLF_global_loop_count < _GLF_global_loop_bound; i++)
        {
            _GLF_global_loop_count++;

            // Always false as i reaches four before a reaches eight.
            if(a++ > 7)
            {
                func();
                break;
            }
        }
    }

    // Check for the expected values, and set color output to black if the check fails.
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    int ref[5] = int[5](- _int_1, _int_0, _int_1, _int_1, _int_1);
    for(int i = _int_0; i < _int_5; i ++)
    {
        if(arr[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
