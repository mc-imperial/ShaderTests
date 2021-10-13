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
#define _int_6 _GLF_uniform_int_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 10, 6]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

struct S {
 int data[10];
} ;

layout(location = 0) out vec4 _GLF_color;

void func()
{
 int a = _int_1;
 int b = _int_1;
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   if(b == _int_6)
    {
     break;
    }
   b ++;
   if(int[10](_int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1, _int_1)[_GLF_MAKE_IN_BOUNDS_INT(a, 10)] == _int_0)
    {
     return;
    }
  }
}
void main()
{
 S obj = S(int[10](_int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0));
 for(int i = _int_0; i < _int_10 && _GLF_global_loop_count < _GLF_global_loop_bound; i ++)
  {
   _GLF_global_loop_count ++;
   if(i == 0)
    {
     obj.data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
    }
   else
    {
     if(i == 1)
      {
       func();
       func();
       obj.data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = _int_1;
      }
     else
      {
       if(i == 4)
        {
         obj.data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = _int_1;
        }
       else
        {
         discard;
        }
      }
    }
  }
 bool ok = true;
 int ref[10] = int[10](_int_1, _int_1, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0, _int_0);
 for(int i = 0; i < 10; i ++)
  {
   if(obj.data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] != ref[_GLF_MAKE_IN_BOUNDS_INT(i, 10)])
    {
     ok = false;
    }
  }
 if(ok)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
