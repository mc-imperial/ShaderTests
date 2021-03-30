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

int index;

void main()
{
 int donor_replacementGLF_dead2high;
 float donor_replacementGLF_dead7sums[9];
 for(int GLF_dead7c = 1; GLF_dead7c < min(index, 1); GLF_dead7c ++)
  {
   donor_replacementGLF_dead7sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead2high, 0, 9 - 1), 9)] += 1.0;
  }
}
