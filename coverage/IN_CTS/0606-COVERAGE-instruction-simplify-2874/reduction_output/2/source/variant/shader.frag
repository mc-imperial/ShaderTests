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
#define _int_7 _GLF_uniform_int_values[1]
#define _int_9 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_10 _GLF_uniform_int_values[4]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 7, 9, 1, 10]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

int arr0[10] = int[10](0, 0, 0, 0, 0, 0, 0, 0, 0, 0), arr1[10] = int[10](1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

void func(int x, int y)
{
 int a = _int_1;
 int b = _int_1;
 while(x <= y)
  {
   if(b >= 6)
    {
     break;
    }
   b ++;
   arr1[_GLF_MAKE_IN_BOUNDS_INT(a ++, 10)] = arr0[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 10)];
  }
 for(int i = x; i <= x; i ++)
  {
   arr0[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = arr1[_GLF_MAKE_IN_BOUNDS_INT(i, 10)];
  }
}
void main()
{
 for(int i = 1; i <= 1; i = 2 * i)
  {
   for(int j = 0; j < 10; j += 2 * i)
    {
     func(j, j + i);
    }
  }
 int ref[10] = int[10](_int_1, _int_0, _int_0, _int_0, _int_0, _int_0, _int_7, _int_0, _int_9, _int_0);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; i < _int_10; i ++)
  {
   if(arr0[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != ref[_GLF_MAKE_IN_BOUNDS_INT(i, 10)])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
