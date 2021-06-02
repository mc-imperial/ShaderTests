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

void main()
{
 int donor_replacementGLF_dead14a = 1;
 donor_replacementGLF_dead14a = floatBitsToInt(1.0);
 float donor_replacementGLF_dead16sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int GLF_dead16cols = 1; GLF_dead16cols <= 4; GLF_dead16cols ++)
  {
   for(int GLF_dead16rows = 2; GLF_dead16rows <= 4; GLF_dead16rows ++)
    {
     donor_replacementGLF_dead16sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead14a, 0, 9 - 1), 9)] = 1.0;
     for(int GLF_dead16c = 0; GLF_dead16c < GLF_dead16cols; GLF_dead16c ++)
      {
       for(int GLF_dead16r = 0; GLF_dead16r < GLF_dead16rows; GLF_dead16r ++)
        {
         switch(donor_replacementGLF_dead14a)
          {
           case 3:
           donor_replacementGLF_dead16sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead14a, 0, 9 - 1), 9)] += 1.0;
           case 4:
           donor_replacementGLF_dead16sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead14a, 0, 9 - 1), 9)] += 1.0;
           case 5:
           donor_replacementGLF_dead16sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead14a, 0, 9 - 1), 9)] += 1.0;
           case 6:
           donor_replacementGLF_dead16sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead14a, 0, 9 - 1), 9)] += 1.0;
           case 7:
           donor_replacementGLF_dead16sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(donor_replacementGLF_dead14a, 0, 9 - 1), 9)] += 1.0;
          }
        }
      }
     donor_replacementGLF_dead14a ++;
    }
  }
}
