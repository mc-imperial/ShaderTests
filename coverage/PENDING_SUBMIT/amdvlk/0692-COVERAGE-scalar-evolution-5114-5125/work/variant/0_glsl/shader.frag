#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_9967_043 _GLF_uniform_float_values[0]
#define _float_5_4 _GLF_uniform_float_values[1]
#define _float_214_06 _GLF_uniform_float_values[2]
#define _float_63_98 _GLF_uniform_float_values[3]
#define _float_9966_043 _GLF_uniform_float_values[4]
#define _float_6_4 _GLF_uniform_float_values[5]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

// Contents of _GLF_uniform_float_values: [9967.043, 5.4, 214.06, 63.98, 9966.043, 6.4]
layout(set = 0, binding = 1) uniform buf1
{
    float _GLF_uniform_float_values[6];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int data[2] = int[2](0, 1);
    int i = _int_1, j = _int_1;
    _GLF_color = vec4(_int_0);

    // Iterates once.
    while(i <= _int_1 && j <= _int_1 && _GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        // Iterates once.
        for(int k = 1; k != 0 && _GLF_global_loop_count < _GLF_global_loop_bound; k--)
        {
            _GLF_global_loop_count ++;

            // Always false.
            if(data[i] < data[j])
            {
                i++;
            }
            else
            {
                _GLF_color = vec4(_float_6_4, _float_214_06, _float_63_98, _float_9967_043);
                j++;
            }
        }
    }

    // Always true.
    if(i == _int_1 && j == _int_2)
    {
        // _GLF_color becomes (1, 0, 0, 1).
        _GLF_color -= vec4(_float_5_4, _float_214_06, _float_63_98, _float_9966_043);
    }
}
