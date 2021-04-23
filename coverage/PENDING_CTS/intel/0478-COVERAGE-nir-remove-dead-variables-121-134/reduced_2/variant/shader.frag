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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

mat4 m44 = mat4(1.0);

void main()
{
 for(int c = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
  {
   _GLF_global_loop_count ++;
   int r = 1;
   int donor_replacementGLF_dead1a = 1;
   donor_replacementGLF_dead1a = c;
   int donor_replacementGLF_dead1j = 1;
   mat4 donor_replacementGLF_dead1matrix_a = mat4(1.0);
   donor_replacementGLF_dead1matrix_a = m44;
   donor_replacementGLF_dead1matrix_a[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead1a, 0, 4 - 1), 4)][_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead1j, 0, 4 - 1), 4)] = 1.0;
   m44[_GLF_MAKE_IN_BOUNDS_INT(c, 4)][_GLF_MAKE_IN_BOUNDS_INT(r, 4)] = 1.0;
  }
}
