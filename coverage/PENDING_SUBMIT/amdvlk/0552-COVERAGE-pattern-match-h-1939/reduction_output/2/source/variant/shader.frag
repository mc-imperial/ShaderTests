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
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 10]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
layout(location = 0) out vec4 _GLF_color;

int arr0[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), arr1[10] = int[10](2, 2, 2, 2, 2, 2, 2, 2, 2, 2);

void func(int a, int b, int c)
{
 for(int i = a; i <= b; i ++)
  {
   arr1[_GLF_MAKE_IN_BOUNDS_INT(clamp(i, _int_0, _int_10 - _int_1), 10)] = arr0[_GLF_MAKE_IN_BOUNDS_INT(clamp(i, _int_0, _int_10 - _int_1), 10)];
  }
 for(int i = a; i <= c; i ++)
  {
   arr0[_GLF_MAKE_IN_BOUNDS_INT(clamp(i, _int_0, _int_10 - _int_1), 10)] = arr1[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 10)];
  }
}
void main()
{
 for(int i = 1; i < 50; i ++)
  {
   func(i, 2 * i - 1, 3 * i - 1);
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_1; i < _int_10; i ++)
  {
   if(arr0[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != _int_1 || arr1[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != _int_1)
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
