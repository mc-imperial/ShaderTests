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
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 2) uniform buf2 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

int arr[64] = int[64](1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
 ivec2 v = ivec2(_int_1);
 bool b = false;
 _GLF_color = vec4(_int_1);
 do
  {
   if(v.x > _int_1)
    {
     break;
    }
   for(int i = 1; i < 8; i ++)
    {
     for(int j = 1; j < 8; j ++)
      {
       if(arr[_GLF_MAKE_IN_BOUNDS_INT(i, 64)] == _int_1)
        {
         v = ivec2(j, i);
         if(gl_FragCoord.x < _float_0_0)
          {
           continue;
          }
         b = true;
         if(injectionSwitch.y < _float_1_0)
          {
           _GLF_color = vec4(_int_0);
           if(gl_FragCoord.y < _float_1_0)
            {
             if(gl_FragCoord.y >= _float_1_0)
              {
               _GLF_color = vec4(_float_1_0);
              }
             return;
            }
          }
        }
      }
    }
   arr[_GLF_MAKE_IN_BOUNDS_INT(v.x + v.y, 64)] = _int_1;
   if(arr[_GLF_MAKE_IN_BOUNDS_INT(_int_1, 64)] == _int_2)
    {
     discard;
    }
  }
 while(b);
 _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
}
