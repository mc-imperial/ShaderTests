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
#define _int_2 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

// Contents of zero: 0
layout(set = 0, binding = 1) uniform buf1 {
 int zero;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 int data0;
 int data1;
} ;

S arr[10] = S[10](S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1), S(1, 1));

void func(inout S s)
{
 s.data0 = _int_0;
}
void main()
{
 for(int i = _int_1; _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
  {
   _GLF_global_loop_count ++;
   for(int j = zero; j != _int_1 && _GLF_global_loop_count < _GLF_global_loop_bound; )
    {
     _GLF_global_loop_count ++;
    }
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)].data0 >= _int_1)
    {
     if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)].data1 == 2)
      {
       func(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)]);
       return;
      }
     else
      {
       func(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)]);
      }
    }
  }
 if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 10)].data0 == _int_0 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_2, 10)].data0 == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
