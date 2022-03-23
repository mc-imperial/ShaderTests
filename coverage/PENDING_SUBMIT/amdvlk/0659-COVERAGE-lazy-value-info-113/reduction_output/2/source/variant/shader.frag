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
#define _int_5 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [5, 1, 0, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int data[5];
} ;

void main()
{
 S obj = S(int[5](1, _int_1, _int_1, _int_1, _int_1));
 int arr[5] = int[5](_int_0, _int_0, _int_0, _int_0, _int_0);
 for(int i = _int_0; (i < _int_5) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   int a = _int_0;
   int b = arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 5)];
   int c = _int_1;
   if(obj.data[_GLF_MAKE_IN_BOUNDS_INT(b, 5)] <= 1)
    {
     c ++;
    }
   arr[_GLF_MAKE_IN_BOUNDS_INT(a + i, 5)] = c + i;
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; (i < _int_5) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 5)] != i + _int_2)
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
