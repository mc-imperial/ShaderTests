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
#define _int_5 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _int_3 _GLF_uniform_int_values[4]
#define _int_2 _GLF_uniform_int_values[5]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 5, 4, 3, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[6];
};
// Contents of one: 1
layout(push_constant) uniform buf_push {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = _int_1;
 int b = _int_1;
 while(b >= _int_1)
  {
   b --;
   for(int i = one; i != 0; i --)
    {
     a = int[5](_int_5, _int_4, _int_3, _int_2, _int_1)[_GLF_MAKE_IN_BOUNDS_INT(b --, 5)];
    }
   if(a > _int_1)
    {
     b ++;
    }
  }
 if(a == _int_5 && b == _int_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
