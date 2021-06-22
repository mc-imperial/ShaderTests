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
#define _int_6 _GLF_uniform_int_values[2]
#define _int_2 _GLF_uniform_int_values[3]
#define _int_5 _GLF_uniform_int_values[4]
#define _int_4 _GLF_uniform_int_values[5]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 6, 2, 5, 4]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[3] = int[3](_int_2, _int_4, _int_6);
 int index = 1;
 while(! (true && ! (one == _int_1 && index <= 1)))
  {
   arr[_GLF_MAKE_IN_BOUNDS_INT(index, 3)] ++;
   index ++;
  }
 if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_0, 3)] == _int_2 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 3)] == _int_5 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_2, 3)] == _int_6)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
