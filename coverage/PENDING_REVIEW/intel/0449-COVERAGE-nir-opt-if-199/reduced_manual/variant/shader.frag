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

const int _GLF_global_loop_bound = 100;
int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
    switch(_int_1)
    {
        case 0:
            if (true)
            {
                _GLF_color = vec4(_int_0);
                return;
            }
        case 1:
            if (true)
            {
                _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);

                if (false)
                {
                    _GLF_color = vec4(_int_1);

                    do
                    {
                        _GLF_global_loop_count++;

                        if (false)
                        {
                            return;
                        }
                        if (true)
                        {
                            return;
                        }
                    }
                    while (_GLF_global_loop_count < _GLF_global_loop_bound);
                }
            }
    }
}
