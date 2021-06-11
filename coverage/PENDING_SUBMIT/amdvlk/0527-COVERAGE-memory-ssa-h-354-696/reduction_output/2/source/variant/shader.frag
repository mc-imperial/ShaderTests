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
#define _int_3 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]
#define _float_3_0 _GLF_uniform_float_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [1, 0, 2, 3]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0, 3.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[3];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

// Contents of two: 2.0
layout(set = 0, binding = 2) uniform buf2 {
 float two;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float arr[9] = float[9](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   while(_GLF_global_loop_count < _GLF_global_loop_bound)
    {
     _GLF_global_loop_count ++;
     arr[_GLF_MAKE_IN_BOUNDS_INT(_int_2, 9)] += _float_1_0;
     int a = _int_1;
     while(two > _float_0_0 && _GLF_global_loop_count < _GLF_global_loop_bound)
      {
       _GLF_global_loop_count ++;
       if(a > _int_3)
        {
         break;
        }
       a ++;
      }
    }
  }
 if(arr[_GLF_MAKE_IN_BOUNDS_INT(int(two), 9)] == _float_3_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
