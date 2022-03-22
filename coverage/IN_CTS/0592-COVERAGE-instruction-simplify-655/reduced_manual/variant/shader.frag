#version 320 es

#define _int_8 _GLF_uniform_int_values[0]
#define _int_9 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]
#define _int_5 _GLF_uniform_int_values[6]
#define _int_6 _GLF_uniform_int_values[7]
#define _int_7 _GLF_uniform_int_values[8]
#define _int_0 _GLF_uniform_int_values[9]
#define _int_10 _GLF_uniform_int_values[10]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [8, 9, 1, 2, 3, 4, 5, 6, 7, 0, 10]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[11];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

// Contents of zero: 0.0
layout(push_constant) uniform buf_push
{
    float zero;
};

layout(location = 0) out vec4 _GLF_color;

// This function is called once with x = 0.
int func(int x)
{
    int i = _int_1;

    while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        // Always true.
        if(x <= _int_1)
        {
            // Iterated once.
            for(int k = int(zero); k != _int_1; k ++)
            {
                // Always true.
                if(gl_FragCoord.y >= 0.0)
                {
                    i++;
                }
            }

            // Sets global loop count to global loop bound.
            for(int k = int(zero); k < _int_1 && _GLF_global_loop_count < _GLF_global_loop_bound; )
            {
                _GLF_global_loop_count++;
            }
        }
    }

    // Returns 2.
    return i;
}

void main()
{
    int a = _int_1, b = _int_1, c = -_int_1;
    int arr[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);

    // Always true.
    if(gl_FragCoord.y >= 0.0)
    {
        // c becomes zero.
        arr[++c] = _int_1;
    }

    // Iterated once.
    while(c >= _int_0 && _GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        // Always true.
        if(gl_FragCoord.y > _float_0_0)
        {
            // a becomes 0
            a = arr[c];
        }

        // Always true.
        if(zero == _float_0_0)
        {
            b = arr[c];
        }

        if(a < _int_1)
        {
            // arr[0] becomes one and c becomes one.
            arr[++c] = _int_1;
        }

        // Calling the function makes global loop count to reach the global loop bound. The function returns 2 making the condition false.
        if(func(a) < _int_1)
        {
            arr[++c] = b;
        }
    }

    // Check the array against reference values, and set output color to black if the check fails.
    int ref[10] = int[10](_int_1, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
    _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

    for(int i = _int_0; i < _int_10; i ++)
    {
        if(arr[i] != ref[i])
        {
            _GLF_color = vec4(_int_0);
        }
    }
}
