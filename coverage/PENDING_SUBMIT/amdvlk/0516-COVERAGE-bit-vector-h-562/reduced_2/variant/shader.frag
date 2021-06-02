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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 vec2 injectionSwitch;
};
struct GLF_dead2Obj {
 float odd_numbers[10];
 float even_numbers[10];
} ;

precision highp int;

precision highp float;

void mergeSort()
{
 for(int m = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); m = 2)
  {
   _GLF_global_loop_count ++;
   switch(int(injectionSwitch.x))
    {
     case 46:
     GLF_dead2Obj donor_replacementGLF_dead2obj = GLF_dead2Obj(float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0), float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0));
     if(1.0 < donor_replacementGLF_dead2obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(m, 10)])
      {
       m = 1;
      }
     int to = 1;
     to = 1 - 1;
     case 18:
     {
      int to = to;
      for(int i = 1; (1 <= to) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
       {
        _GLF_global_loop_count ++;
       }
     }
     {
      GLF_dead2Obj donor_replacementGLF_dead2obj = GLF_dead2Obj(float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0), float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0));
      if(1.0 < donor_replacementGLF_dead2obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(m, 10)])
       {
        to = 1;
       }
     }
    }
  }
}
void main()
{
 mergeSort();
}
