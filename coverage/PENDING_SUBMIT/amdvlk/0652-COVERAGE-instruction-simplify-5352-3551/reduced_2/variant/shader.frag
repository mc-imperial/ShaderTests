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

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp float;

precision highp int;

void main()
{
 uint uselessOutVariable = 1u;
 1u < uaddCarry(uint(int(injectionSwitch.x)), 1u, uselessOutVariable);
 vec4 donor_replacementGLF_dead4c = vec4(1.0);
 int donor_replacementGLF_dead4i = 1;
 donor_replacementGLF_dead4i = bitCount(uselessOutVariable);
 donor_replacementGLF_dead4c[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead4i, 0, 4 - 1), 4)] = 1.0;
}
