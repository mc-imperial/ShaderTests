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
#define _int_2 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 5]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

int arr[5] = int[5](1, 1, 1, 1, 1);

layout(location = 0) out vec4 _GLF_color;

void func()
{
 int b = _int_0;
 for(int i = 0; _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
  {
   _GLF_global_loop_count ++;
   if(++ b > 2)
    {
     break;
    }
   int c = _int_0;
   for(int j = _int_0; _GLF_global_loop_count < _GLF_global_loop_bound; )
    {
     _GLF_global_loop_count ++;
     if(++ c > _int_2)
      {
       break;
      }
     arr[_GLF_MAKE_IN_BOUNDS_INT(j + i, 5)] = i - 1;
    }
  }
}
void main()
{
 func();
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   int a = 5;
   for(int i = 1; i < 4 && _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
    {
     _GLF_global_loop_count ++;
     if(a ++ > 7)
      {
       func();
       break;
      }
    }
  }
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 int ref[5] = int[5](- _int_1, _int_0, _int_1, _int_1, _int_1);
 for(int i = _int_0; i < _int_5; i ++)
  {
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 5)] != ref[_GLF_MAKE_IN_BOUNDS_INT(i, 5)])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
