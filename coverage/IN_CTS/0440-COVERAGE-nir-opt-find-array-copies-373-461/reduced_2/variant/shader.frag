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

precision highp int;

precision highp float;

int GLF_dead9MATRIX_N = 1;

precision highp int;

precision highp float;

vec4 GLF_dead8_GLF_color = vec4(1.0);

precision highp int;

precision highp float;

mat3x4 GLF_dead1m34 = mat3x4(1.0);

precision highp float;

precision highp int;

void main()
{
 int GLF_dead9i = 1;
 GLF_dead8_GLF_color[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead9i, 0, 4 - 1), 4)] /= mat4(GLF_dead1m34)[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead9MATRIX_N, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_dead9MATRIX_N, 4)];
 int GLF_dead1c = 1;
 int GLF_dead1r = 1;
 GLF_dead1m34[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead1c, 0, 3 - 1), 3)][_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead1r, 0, 4 - 1), 4)] = 1.0;
}
