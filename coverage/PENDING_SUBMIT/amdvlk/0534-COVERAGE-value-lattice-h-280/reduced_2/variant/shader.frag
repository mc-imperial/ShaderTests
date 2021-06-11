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

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
void quicksort()
{
 int l = 1;
 int top = 1;
 while(top >= 1)
  {
   top --;
   for(int _injected_loop_counter = int(injectionSwitch.y); _injected_loop_counter != 0; _injected_loop_counter --)
    {
     l = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1)[_GLF_MAKE_IN_BOUNDS_INT(top --, 10)];
    }
   if(1 > l)
    {
     ++ top;
    }
  }
}
void main()
{
 quicksort();
}
