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
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_0_01 _GLF_uniform_float_values[1]
#define _float_0_2 _GLF_uniform_float_values[2]
#define _float_0_1 _GLF_uniform_float_values[3]
#define _float_0_3 _GLF_uniform_float_values[4]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [0.0, 0.01, 0.2, 0.1, 0.3]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[5];
};
// Contents of zeroVec: [0.0, 0.0]
layout(set = 0, binding = 2) uniform buf2 {
 vec2 zeroVec;
};
// Contents of oneVec: [1.0, 1.0]
layout(set = 0, binding = 3) uniform buf3 {
 vec2 oneVec;
};
layout(location = 0) out vec4 _GLF_color;

struct S {
 float numbers[3];
} ;

void main()
{
 S obj = S(float[3](_float_0_1, _float_0_2, _float_0_3));
 obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(zeroVec.x), 3)] = _float_0_0;
 float a = ((zeroVec.x > _float_0_0) ? zeroVec : oneVec).y;
 float b = mix(_float_0_0, a, obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 3)]);
 if(distance(b, _float_0_2) < _float_0_01)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
