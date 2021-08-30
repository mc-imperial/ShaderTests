#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 10]
layout(set = 0, binding = 0) uniform buf0 {
    int _GLF_uniform_int_values[3];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
    int one;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
    int data;
} ;

void func(inout S s, int x)
{
    if(one == _int_0)
    {
        return;
    }
    s.data = x;
}
void main()
{
    int index;
    S arr[10];
    if(one == _int_0)
    {
        func(arr[_GLF_MAKE_IN_BOUNDS_INT(clamp(index, _int_0, _int_10 - _int_1), 10)], index);
    }
    else
    {
        func(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_0, 10)], _int_1);
    }
    if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_0, 10)].data == _int_1)
    {
        _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
    }
    else
    {
        _GLF_color = vec4(_int_0);
    }
}
