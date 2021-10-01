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
#define _int_9 _GLF_uniform_int_values[3]
#define _int_20 _GLF_uniform_int_values[4]
#define _int_29 _GLF_uniform_int_values[5]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 9, 20, 29]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
layout(location = 0) out vec4 _GLF_color;

void func()
{
 int index = _int_0;
 while(true)
  {
   int a = int[10](_int_1, _int_2, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1)[_GLF_MAKE_IN_BOUNDS_INT(index, 10)];
   if(a == _int_2)
    {
     return;
    }
   index = _int_1;
  }
}
void main()
{
 int a = _int_0;
 for(int i = _int_0; i < _int_20; i ++)
  {
   func();
   a = i;
   int arr[9] = int[9](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1);
   for(int j = 0; j < 10; j ++)
    {
     arr[_GLF_MAKE_IN_BOUNDS_INT(clamp(a, _int_0, _int_9 - _int_1), 9)] = _int_1;
     switch(i)
      {
       case 0:
       arr[_GLF_MAKE_IN_BOUNDS_INT(clamp(a, _int_0, _int_9 - _int_1), 9)] ++;
       case 8:
       arr[_GLF_MAKE_IN_BOUNDS_INT(clamp(a, 0, 9 - 1), 9)] ++;
      }
     a ++;
    }
  }
 if(a == _int_29)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
