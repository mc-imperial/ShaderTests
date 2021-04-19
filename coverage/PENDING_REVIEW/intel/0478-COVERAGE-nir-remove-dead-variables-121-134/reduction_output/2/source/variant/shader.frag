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
#define _int_100 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_4 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [100, 0, 1, 4]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat4 m0 = mat4(_int_0);
 for(int c = _int_1; (c < _int_100) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
  {
   _GLF_global_loop_count ++;
   int a = _int_1;
   mat4 m1 = m0;
   m1[_GLF_MAKE_IN_BOUNDS_INT(c % _int_4, 4)][_GLF_MAKE_IN_BOUNDS_INT(a, 4)] = _float_1_0;
   m0[_GLF_MAKE_IN_BOUNDS_INT(c % _int_4, 4)][_GLF_MAKE_IN_BOUNDS_INT(_int_1, 4)] = _float_1_0;
  }
 if(m0 == mat4(_int_0, _int_1, _int_0, _int_0, _int_0, _int_1, _int_0, _int_0, _int_0, _int_1, _int_0, _int_0, _int_0, _int_1, _int_0, _int_0))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
