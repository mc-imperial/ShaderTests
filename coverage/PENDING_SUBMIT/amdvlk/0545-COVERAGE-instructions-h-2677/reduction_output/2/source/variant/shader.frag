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
#define _int_0 _GLF_uniform_int_values[1]
#define _int_20 _GLF_uniform_int_values[2]
#define _int_1 _GLF_uniform_int_values[3]
#define _int_2 _GLF_uniform_int_values[4]
#define _int_3 _GLF_uniform_int_values[5]
#define _int_4 _GLF_uniform_int_values[6]
#define _int_19 _GLF_uniform_int_values[7]
#define _int_16 _GLF_uniform_int_values[8]
#define _int_17 _GLF_uniform_int_values[9]
#define _int_18 _GLF_uniform_int_values[10]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [5, 0, 20, 1, 2, 3, 4, 19, 16, 17, 18]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[11];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr[5] = int[5](_int_1, _int_2, _int_3, _int_4, _int_5);
 _GLF_color = vec4(_int_0);
 for(int i = _int_0; i < _int_5; i ++)
  {
   int a = - 100;
   int b = 1;
   do
    {
     if(b > 7)
      {
       break;
      }
     switch(a)
      {
       case 0:
       _GLF_color = vec4(_int_1);
       break;
       case 5:
       if(gl_FragCoord.x < _float_1_0)
        {
         _GLF_color = vec4(1);
        }
       break;
      }
     a ++;
     b ++;
    }
   while(a < 10);
   for(int j = _int_0; j < _int_5; j ++)
    {
     for(int k = _int_0; k < _int_3; k ++)
      {
       for(int l = _int_0; l < k; l ++)
        {
         arr[_GLF_MAKE_IN_BOUNDS_INT(j, 5)] ++;
        }
      }
    }
  }
 if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_0, 5)] == _int_16 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 5)] == _int_17 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_2, 5)] == _int_18 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_3, 5)] == _int_19 && arr[_GLF_MAKE_IN_BOUNDS_INT(_int_4, 5)] == _int_20)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
}
