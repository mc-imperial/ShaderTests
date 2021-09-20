#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _int_6 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 10, 6]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};

const int _GLF_global_loop_bound = 10;
int _GLF_global_loop_count = 0;

struct S
{
    int data[10];
};

layout(location = 0) out vec4 _GLF_color;

void func()
{
    int a = _int_1;
    int b = _int_1;

    while (_GLF_global_loop_count < _GLF_global_loop_bound)
    {
        _GLF_global_loop_count ++;

        if(b == _int_6)
        {
            break;
        }

        b++;

        // Always false.
        if(int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1)[a] == _int_0)
        {
            return;
        }
    }
}

void main()
{
    S obj = S(int[10](_int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0));

    for(int i = _int_0; i < _int_10 && _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
    {
        _GLF_global_loop_count ++;

        if(i == 0)
        {
            obj.data[i] = 1;
        }
        else if(i == 1)
        {
            // Calling func twice makes sure the global counter has reached its limit, and this
            // loop will therefore end.
            func();
            func();
            obj.data[i] = _int_1;
        }
        // Never executed.
        else if(i == 4)
        {
            obj.data[i] = _int_1;
        }
        // Never executed.
        else
        {
            discard;
        }
    }

    // Check results against reference values.
    bool ok = true;
    int ref[10] = int[10](_int_1, _int_1, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0);

    for(int i = 0; i < 10; i ++)
    {
        if(obj.data[i] != ref[i])
        {
            ok = false;
        }
    }

    if(ok)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
