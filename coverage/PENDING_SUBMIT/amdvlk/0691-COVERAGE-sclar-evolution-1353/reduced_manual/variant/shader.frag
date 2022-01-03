#version 320 es

#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_3 _GLF_uniform_int_values[2]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 3]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[3];
};

struct S {
    int data;
};

S arr[10] = S[10](S(0), S(1), S(2), S(3), S(4), S(5), S(6), S(7), S(8), S(9));

layout(location = 0) out vec4 _GLF_color;

void func0(inout S s)
{
    // Iterates once.
    for(int i = 1; i > 0; i--)
    {
        s.data = -_int_1;
    }
}

int func1()
{
    int index = _int_0;

    for(int i = _int_0; i < _int_3; i++)
    {
        // True on the second iteration.
        if(arr[index].data == -_int_1)
        {
            return _int_1;
        }

        index = _int_1;
    }

    // Never executed.
    return _int_0;
}

void main()
{
    // Sets arr[0].data to -1.
    func0(arr[_int_1]);

    // Always true.
    if(func1() == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
