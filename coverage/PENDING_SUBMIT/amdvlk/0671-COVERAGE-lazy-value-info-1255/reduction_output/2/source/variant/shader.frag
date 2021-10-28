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
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_10 _GLF_uniform_int_values[2]
#define _int_5 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_int_values: [1, 0, 10, 5]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
layout(location = 0) out vec4 _GLF_color;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
struct S {
 int data;
} ;

S arr[10] = S[10](S(1), S(1), S(1), S(1), S(1), S(1), S(1), S(1), S(1), S(1));

void func(inout S s)
{
 if(injectionSwitch.x > injectionSwitch.y)
  {
   return;
  }
 if(gl_FragCoord.y < 0.0)
  {
   return;
  }
 s.data = 0;
}
void main()
{
 func(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 10)]);
 bool b = false;
 if(injectionSwitch.x > injectionSwitch.y)
  {
   b = true;
  }
 if(! b)
  {
   int idx = 0;
   for(int i = 0; (i < _int_5) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
    {
     _GLF_global_loop_count ++;
     arr[_GLF_MAKE_IN_BOUNDS_INT(idx, 10)].data = _int_1;
     func(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)]);
    }
  }
 int ref[10] = int[10](_int_1, _int_0, _int_0, _int_0, _int_0, _int_1, _int_1, _int_1, _int_1, _int_1);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = _int_0; (i < _int_10) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 10)].data != ref[_GLF_MAKE_IN_BOUNDS_INT(i, 10)])
    {
     _GLF_color = vec4(_int_0);
    }
  }
}
