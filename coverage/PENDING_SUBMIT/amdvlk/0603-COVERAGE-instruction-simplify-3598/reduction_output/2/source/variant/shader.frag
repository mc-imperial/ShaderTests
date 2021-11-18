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
#define _int_16 _GLF_uniform_int_values[1]
#define _int_128 _GLF_uniform_int_values[2]
#define _int_0 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 16, 128, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

int map[128] = int[128](1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
 do
  {
   _GLF_global_loop_count ++;
   int a = 0;
   if(map[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 128)] == _int_1)
    {
     a ++;
    }
   if(map[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 128)] == _int_1)
    {
     while(_GLF_global_loop_count < _GLF_global_loop_bound)
      {
       _GLF_global_loop_count ++;
      }
     a ++;
    }
   if(map[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 128)] == _int_1)
    {
     a ++;
    }
   if(a == 0)
    {
     map[_GLF_MAKE_IN_BOUNDS_INT(_int_16, 128)] = _int_0;
    }
   if(map[_GLF_MAKE_IN_BOUNDS_INT(clamp(int(gl_FragCoord.y), _int_0, _int_128 - _int_1), 128)] == _int_0)
    {
     return;
    }
  }
 while(_GLF_global_loop_count < _GLF_global_loop_bound);
 if(map[_GLF_MAKE_IN_BOUNDS_INT(_int_16, 128)] == _int_1)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
