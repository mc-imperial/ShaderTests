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
#define _int_8 _GLF_uniform_int_values[3]
#define _int_5 _GLF_uniform_int_values[4]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_5_0 _GLF_uniform_float_values[1]
#define _float_6_0 _GLF_uniform_float_values[2]
#define _float_7_0 _GLF_uniform_float_values[3]
#define _float_8_0 _GLF_uniform_float_values[4]
#define _float_9_0 _GLF_uniform_float_values[5]
#define _float_1_0 _GLF_uniform_float_values[6]
#define _float_2_0 _GLF_uniform_float_values[7]
#define _float_3_0 _GLF_uniform_float_values[8]
#define _float_4_0 _GLF_uniform_float_values[9]
#define _float_10_0 _GLF_uniform_float_values[10]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 5.0, 6.0, 7.0, 8.0, 9.0, 1.0, 2.0, 3.0, 4.0, 10.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[11];
};
// Contents of _GLF_uniform_int_values: [1, 0, 3, 8, 5]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[5];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 mat2x4 m24 = mat2x4(_float_0_0);
 int a = _int_0;
 for(int i = _int_1; i < _int_5; i ++)
  {
   for(int j = 2; j < 5; j ++)
    {
     for(int k = _int_0; k < i; k ++)
      {
       for(int l = 0; l < j; l ++)
        {
         switch(a)
          {
           case 2u:
           m24[_GLF_MAKE_IN_BOUNDS_INT(min(k, _int_1), 2)][_GLF_MAKE_IN_BOUNDS_INT(min(l, _int_3), 4)] = _float_1_0;
           break;
           case 553u:
           discard;
           case 554u:
           discard;
           case 556u:
           discard;
           case 558u:
           if(gl_FragCoord.y < _float_1_0)
            {
             discard;
            }
          }
        }
      }
     a ++;
    }
  }
 float arr[9] = float[9](_float_1_0, _float_2_0, _float_3_0, _float_4_0, _float_5_0, _float_6_0, _float_7_0, _float_8_0, _float_9_0);
 int b = _int_1;
 for(int i = 0; i < 5; i ++)
  {
   for(int j = 1; j < 5; j ++)
    {
     if(gl_FragCoord.x < _float_10_0)
      {
       continue;
      }
     int idx = min(b, _int_8);
     arr[_GLF_MAKE_IN_BOUNDS_INT(idx, 9)] = _float_0_0;
     for(int k = 0; k < i; k ++)
      {
       for(int l = _int_0; l < j; l ++)
        {
         switch(idx - _int_5)
          {
           case 0:
           arr[_GLF_MAKE_IN_BOUNDS_INT(idx, 9)] += _float_1_0;
           break;
           case 2:
           arr[_GLF_MAKE_IN_BOUNDS_INT(idx, 9)] += m24[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 2)][_GLF_MAKE_IN_BOUNDS_INT(_int_1, 4)];
           break;
          }
        }
      }
     b ++;
    }
  }
}
