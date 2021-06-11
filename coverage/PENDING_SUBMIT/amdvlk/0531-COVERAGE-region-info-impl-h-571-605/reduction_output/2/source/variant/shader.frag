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
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [5, 1, 0, 2]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[5] = int[5](_int_1, _int_1, _int_1, _int_1, _int_1);
 int a = _int_1;
 do
  {
   int b = _int_0;
   if(a > _int_1 && arr[_GLF_MAKE_IN_BOUNDS_INT(a, 5)] == _int_1)
    {
     b ++;
    }
   if(gl_FragCoord.x < _float_0_0)
    {
     continue;
    }
   if(b == _int_1)
    {
     break;
    }
   else
    {
     arr[_GLF_MAKE_IN_BOUNDS_INT(a, 5)] = _int_2;
     a ++;
    }
  }
 while(true);
 int ref[5] = int[5](_int_1, _int_2, _int_1, _int_1, _int_1);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; i < _int_5; i ++)
  {
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 5)] != ref[_GLF_MAKE_IN_BOUNDS_INT(i, 5)] || a != _int_2)
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
