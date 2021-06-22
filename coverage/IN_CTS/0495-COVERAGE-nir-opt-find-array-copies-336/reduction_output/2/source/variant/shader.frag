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
#define _int_8 _GLF_uniform_int_values[0]
#define _int_10 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]
#define _int_2 _GLF_uniform_int_values[4]
#define _int_3 _GLF_uniform_int_values[5]
#define _int_4 _GLF_uniform_int_values[6]
#define _int_5 _GLF_uniform_int_values[7]
#define _int_6 _GLF_uniform_int_values[8]
#define _int_7 _GLF_uniform_int_values[9]
#define _int_9 _GLF_uniform_int_values[10]
#define _int_17 _GLF_uniform_int_values[11]
#define _int_11 _GLF_uniform_int_values[12]
#define _int_15 _GLF_uniform_int_values[13]
#define _int_16 _GLF_uniform_int_values[14]
#define _int_12 _GLF_uniform_int_values[15]
#define _int_13 _GLF_uniform_int_values[16]
#define _int_14 _GLF_uniform_int_values[17]
#define _int_18 _GLF_uniform_int_values[18]
#define _int_19 _GLF_uniform_int_values[19]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [8, 10, 1, 0, 2, 3, 4, 5, 6, 7, 9, 17, 11, 15, 16, 12, 13, 14, 18, 19]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[20];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 int arr0[10] = int[10](_int_0, _int_1, _int_2, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
 int arr1[10] = int[10](_int_10, _int_11, _int_12, _int_13, _int_14, _int_15, _int_16, _int_17, _int_18, _int_19);
 for(int a = _int_6; a < _int_8; a ++)
  {
   int limiter0 = _int_0;
   while(limiter0 < _int_2)
    {
     limiter0 ++;
     int limiter1 = _int_1;
     for(int b = _int_0; b < _int_10; b ++)
      {
       if(limiter1 > _int_3)
        {
         break;
        }
       limiter1 ++;
       arr0[_GLF_MAKE_IN_BOUNDS_INT(b, 10)] = arr1[_GLF_MAKE_IN_BOUNDS_INT(a, 10)];
      }
    }
   int limiter2 = 0;
   while(limiter2 < 5)
    {
     limiter2 ++;
     arr0[1] = arr1[1];
    }
   do
    {
     int limiter3 = 0;
     for(int d = 0; d < 10; d ++)
      {
       if(limiter3 > 4)
        {
         break;
        }
       limiter3 ++;
       arr1[_GLF_MAKE_IN_BOUNDS_INT(d, 10)] = arr0[_GLF_MAKE_IN_BOUNDS_INT(d, 10)];
      }
    }
   while(one == _int_0);
  }
 int ref0[10] = int[10](_int_17, _int_11, _int_17, _int_3, _int_4, _int_5, _int_6, _int_7, _int_8, _int_9);
 int ref1[10] = int[10](_int_17, _int_11, _int_17, _int_3, _int_4, _int_15, _int_16, _int_17, _int_18, _int_19);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; i < _int_10; i ++)
  {
   if(arr0[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != ref0[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] || arr1[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != ref1[_GLF_MAKE_IN_BOUNDS_INT(i, 10)])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
