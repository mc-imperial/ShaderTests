#version 320 es

#define _int_0 _GLF_uniform_int_values[0]
#define _int_2 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]

precision highp float;
precision highp int;

// Contents of _GLF_uniform_int_values: [0, 2, 1, 3]
layout(set = 0, binding = 0) uniform buf0
{
    int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

struct S
{
    int data;
};

void func(inout S s)
{
}

void main()
{
    S arr[10] = S[10](S(_int_1), S(_int_1), S(_int_1), S(_int_1), S(_int_1), S(_int_1), S(_int_1), S(_int_1), S(_int_1), S(_int_1));
    int a = _int_0;
    // a becomes 1.
    a = arr[a].data;

    // v = ((3, 3) & a) % (-1) 
    //   = ((3, 3) & 1) % (-1)
    //   = (1, 1) % (-1)
    //   = (0, 0)
    ivec2 v = (ivec2(_int_3) & a) % (-1);

    // Iterated once.
    do
    {
        a++;
    }
    while(v.y != _int_0);

    // Does nothing.
    func(arr[_int_1]);

    // Always true.
    if(a == _int_2)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
