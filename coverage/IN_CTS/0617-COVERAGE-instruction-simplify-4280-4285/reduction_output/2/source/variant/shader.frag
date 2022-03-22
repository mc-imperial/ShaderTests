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
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: 1
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[1];
};
// Contents of _GLF_uniform_float_values: [0.0, 1.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec4 v;
 _GLF_color = mix(vec4(1.0, v[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 4)], 1.0, 1.0), vec4(1), bvec4(true, true, gl_FragCoord.y > _float_0_0, true));
 _GLF_color.yz -= _float_1_0;
}
