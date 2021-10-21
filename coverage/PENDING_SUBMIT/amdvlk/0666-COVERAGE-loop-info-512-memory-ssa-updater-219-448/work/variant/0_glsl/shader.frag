#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_8 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0
{
    float _GLF_uniform_float_values[1];
};

// Contents of _GLF_uniform_int_values: [1, 0, 8]
layout(set = 0, binding = 1) uniform buf1
{
    int _GLF_uniform_int_values[3];
};

// Contents of one: 1.0
layout(set = 0, binding = 2) uniform buf2
{
    float one;
};

layout(location = 0) out vec4 _GLF_color;

void main()
{
    int arr[10] = int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

    for(int i = 1; i < 10; i++)
    {
        if(i != 1)
        {
            // Iterated once.
            do
            {
                if(i != 7)
                {
                    // Iterated once.
                    do
                    {
                        if(i == 8)
                        {
                            arr[i] = _int_0;
                        }
                    }
                    while(_float_0_0 > one);
                }
            }
            while(_float_0_0 > one);
        }
    }

    // Always true.
    if(arr[_int_1] == _int_1 && arr[_int_8] == _int_0)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        discard;
    }
}
