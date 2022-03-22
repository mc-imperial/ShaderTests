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

int GLF_live3MATRIX_N = 1;

precision highp int;

precision highp float;

void main()
{
 for(int j = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   int iteration = 1;
   int donor_replacementGLF_dead5stack[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
   donor_replacementGLF_dead5stack = int[10](1, (GLF_live3MATRIX_N / GLF_live3MATRIX_N), 1, 1, 1, 1, 1, 1, 1, 1);
   GLF_live3MATRIX_N = donor_replacementGLF_dead5stack[_GLF_MAKE_IN_BOUNDS_INT(iteration, 10)];
  }
}
