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
#define _int_10 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]
#define _int_5 _GLF_uniform_int_values[6]
#define _int_6 _GLF_uniform_int_values[7]
#define _int_7 _GLF_uniform_int_values[8]
#define _int_8 _GLF_uniform_int_values[9]
#define _int_9 _GLF_uniform_int_values[10]

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [10, 1, 0, 2, 3, 4, 5, 6, 7, 8, 9]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[11];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
 int ref[10] = int[10](_int_0, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
 for(int i = 0; (i < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = arr[_GLF_MAKE_IN_BOUNDS_INT(clamp(sign(i), _int_0, _int_1), 10)];
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; (i < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != ref[_GLF_MAKE_IN_BOUNDS_INT(i, 10)])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
