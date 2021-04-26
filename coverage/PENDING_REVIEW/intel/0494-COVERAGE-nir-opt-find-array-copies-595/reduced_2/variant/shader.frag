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

void main()
{
 vec3 col;
 int donor_replacementGLF_dead9j;
 mat4 donor_replacementGLF_dead9matrix_a;
 donor_replacementGLF_dead9matrix_a = mat4(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, col[1], 1.0);
 for(int GLF_dead9a = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_dead9a --)
  {
   _GLF_global_loop_count ++;
   donor_replacementGLF_dead9matrix_a[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead9a, 0, 4 - 1), 4)][_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead9j, 0, 4 - 1), 4)] = 1.0;
  }
}
