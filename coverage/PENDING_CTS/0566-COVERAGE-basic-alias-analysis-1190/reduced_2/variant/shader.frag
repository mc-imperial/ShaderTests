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

struct GLF_dead2Obj {
 float odd_numbers[10];
 float even_numbers[10];
} ;

precision highp int;

precision highp float;

vec2 pattern()
{
 int GLF_live3_looplimiter2 = 1;
 for(int GLF_live3j = 1; true; 1)
  {
   if(GLF_live3_looplimiter2 >= 6)
    {
     break;
    }
   GLF_live3_looplimiter2 ++;
   if(gl_FragCoord.x < 1.0)
    {
     GLF_dead2Obj donor_replacementGLF_dead2obj = GLF_dead2Obj(float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0), float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0));
     for(int GLF_dead2i = 1; GLF_dead2i < 9; GLF_dead2i ++)
      {
       int GLF_dead2index = 1;
       GLF_dead2index = GLF_dead2i;
       if(donor_replacementGLF_dead2obj.even_numbers[1] < 1.0)
        {
         GLF_dead2index = 1;
        }
       donor_replacementGLF_dead2obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead2index, 0, 10 - 1), 10)] = 1.0;
      }
    }
  }
 return vec2(1.0);
}
void main()
{
 pattern();
}
