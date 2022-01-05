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
int performPartition(int l)
{
 int i = 1;
 for(int j = l; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   if(j <= 1)
    {
     for(int _injected_loop_counter = int(injectionSwitch.x); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
      {
       _GLF_global_loop_count ++;
       if(gl_FragCoord.y >= 0.0)
        {
         i ++;
        }
       else
        {
        }
      }
     for(int _injected_loop_counter = int(injectionSwitch.x); (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
      {
       _GLF_global_loop_count ++;
      }
    }
  }
 return i;
}
void quicksort()
{
 int l = 1, h = 1;
 int stack[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
 int top = 1;
 top = - 1;
 if(gl_FragCoord.y >= 0.0)
  {
   stack[_GLF_MAKE_IN_BOUNDS_INT(++ top, 10)] = 1;
  }
 else
  {
  }
 while((top >= 0) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(1.0 > injectionSwitch.y)
    {
    }
   else
    {
     h = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1)[_GLF_MAKE_IN_BOUNDS_INT(top, 10)];
    }
   if(gl_FragCoord.y < 1.0)
    {
    }
   else
    {
     l = stack[_GLF_MAKE_IN_BOUNDS_INT(top, 10)];
    }
   int p = 1;
   p = performPartition(l);
   if(1 > l)
    {
     stack[_GLF_MAKE_IN_BOUNDS_INT(++ top, 10)] = 1;
    }
   if(p < 1)
    {
     stack[_GLF_MAKE_IN_BOUNDS_INT(++ top, 10)] = h;
    }
  }
}
void main()
{
 quicksort();
}
