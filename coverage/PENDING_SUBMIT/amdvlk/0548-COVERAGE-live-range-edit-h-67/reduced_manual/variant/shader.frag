#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_9 _GLF_uniform_int_values[3]
#define _int_20 _GLF_uniform_int_values[4]
#define _int_29 _GLF_uniform_int_values[5]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 9, 20, 29]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[6];
};
layout(location = 0) out vec4 _GLF_color;

// A void function that only touches local variables and returns.
void func()
{
    int index = _int_0;

    while(true)
    {
        int a = int[10](_int_1, _int_2, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1)[index];

        if(a == _int_2)
        {
            // Executed during the second iteration.
            return;
        }

        index = _int_1;
    }
}
void main()
{
    int a = _int_0;

    for(int i = _int_0; i < _int_20; i ++)
    {
        // Doesn't have any effect.
        func();
        a = i;

        int arr[9] = int[9](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);

        // The array is never read so we don't care if the elements get incremented or not.
        // The loop increments a by 10 in total.
        for(int j = 0; j < 10; j ++)
        {
            arr[clamp(a, _int_0, 8)] = _int_1;

            switch(i)
            {
                case 0:
                    arr[clamp(a, 0, 8)]++;
                case 8:
                    arr[clamp(a, 0, 8)]++;
            }
            a++;
        }
    }

    // Always true.
    if(a == _int_29)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
