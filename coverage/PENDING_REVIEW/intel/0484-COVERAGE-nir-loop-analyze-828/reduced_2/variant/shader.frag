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

struct GLF_dead11QuicksortObject {
 int numbers[10];
} ;

GLF_dead11QuicksortObject GLF_dead11obj = GLF_dead11QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 color = vec3(1.0);
 int donor_replacementGLF_dead11h = 1;
 donor_replacementGLF_dead11h = clamp(ivec4(1, 1, 2188, 1), 1, bitfieldReverse(1))[1];
 for(int GLF_dead11j = 1; GLF_dead11j <= donor_replacementGLF_dead11h - 1; GLF_dead11j ++)
  {
   {
    int GLF_dead11j = GLF_dead11j;
    GLF_dead11obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead11j, 0, 10 - 1), 10)] = 1;
   }
  }
 color.z += float(GLF_dead11obj.numbers[1]);
 _GLF_color = vec4(color, 1.0);
}
