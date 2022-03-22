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

layout(location = 0) out vec4 _GLF_color;

int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void merge()
{
 _GLF_color = vec4(1.0);
 int i = 1, j = 1;
 while((i <= 1 && j <= 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
    {
     _GLF_global_loop_count ++;
     if(data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] < data[_GLF_MAKE_IN_BOUNDS_INT(j, 10)])
      {
       i ++;
      }
     else
      {
       _GLF_color = vec4(6.4, 214.060, 63.98, 9967.0431);
       j ++;
      }
    }
  }
}
void main()
{
 merge();
}
