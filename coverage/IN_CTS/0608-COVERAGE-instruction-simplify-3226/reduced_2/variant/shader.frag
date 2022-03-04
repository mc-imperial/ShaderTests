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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void quicksort()
{
 int l = 1;
 int top = 1;
 l = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1)[_GLF_MAKE_IN_BOUNDS_INT(top, 10)];
 {
  int l = l;
  for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
   {
    _GLF_global_loop_count ++;
    for(int GLF_dead9i = 1; (l <= min(_injected_loop_counter, l)) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
     {
      _GLF_global_loop_count ++;
     }
   }
 }
}
void main()
{
 quicksort();
}
