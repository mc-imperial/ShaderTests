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

int GLF_dead20data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), GLF_dead20temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void GLF_dead20merge(int GLF_dead20from, int GLF_dead20mid, int GLF_dead20to)
{
 int GLF_dead20k = 1, GLF_dead20i = 1;
 GLF_dead20i = GLF_dead20from;
 while(GLF_dead20i <= GLF_dead20mid)
  {
   GLF_dead20temp[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead20k ++, 0, 10 - 1), 10)] = GLF_dead20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead20i ++, 10)];
  }
 for(int GLF_dead20i = GLF_dead20from; GLF_dead20i <= GLF_dead20to; GLF_dead20i ++)
  {
   GLF_dead20data[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead20i, 0, 10 - 1), 10)] = GLF_dead20temp[1];
  }
}
precision highp float;

precision highp int;

void main()
{
 for(int GLF_dead5i = 1; GLF_dead5i < 800; GLF_dead5i ++)
  {
   GLF_dead20merge(GLF_dead5i, GLF_dead5i + GLF_dead5i - 1, GLF_dead5i + 2 * GLF_dead5i - 1);
  }
}
