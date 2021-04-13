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

vec2 polarize()
{
 vec3 GLF_merged2_0_2_6_2_1_2centerpi;
 GLF_merged2_0_2_6_2_1_2centerpi.z = 1.0;
 vec3 donor_replacementGLF_dead9data[16];
 donor_replacementGLF_dead9data = vec3[16](vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), GLF_merged2_0_2_6_2_1_2centerpi, vec3(1.0));
 vec3 donor_replacementGLF_dead9sum;
 int GLF_dead9i;
 donor_replacementGLF_dead9sum += donor_replacementGLF_dead9data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead9i, 16)];
 return vec2(1.0);
}
void main()
{
 polarize();
}
