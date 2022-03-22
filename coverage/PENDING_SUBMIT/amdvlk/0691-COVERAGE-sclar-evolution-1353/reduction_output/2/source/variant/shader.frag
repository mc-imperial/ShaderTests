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
#define _int_3 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 3]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
struct S {
 int data;
} ;

S arr[10] = S[10](S(0), S(1), S(2), S(3), S(4), S(5), S(6), S(7), S(8), S(9));

layout(location = 0) out vec4 _GLF_color;

void func0(inout S s)
{
 for(int i = 1; i > 0; i --)
  {
   s.data = - _int_1;
  }
}
int func1()
{
 int index = _int_0;
 for(int i = _int_0; i < _int_3; i ++)
  {
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(index, 10)].data == - _int_1)
    {
     return _int_1;
    }
   index = _int_1;
  }
 return _int_0;
}
void main()
{
 func0(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 10)]);
 if(func1() == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
