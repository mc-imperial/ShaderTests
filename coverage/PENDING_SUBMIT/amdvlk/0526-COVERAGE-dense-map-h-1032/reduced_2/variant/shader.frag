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
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp float;

precision highp int;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
void main()
{
 float data[10] = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int i = 0; i < 9; i ++)
  {
   for(int j = 0; j < 10; j ++)
    {
     if(j < i)
      {
       continue;
      }
     bool checkSwap_inline_return_value_0 = true;
     float a = 1.0;
     a = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i, 10)];
     float b = 1.0;
     b = data[1];
     checkSwap_inline_return_value_0 = 1.0 < resolution.y ? bool(bvec4((injectionSwitch.x < injectionSwitch.y), true, true, true)) : a < b;
     bool doSwap = true;
     doSwap = checkSwap_inline_return_value_0;
     if(doSwap)
      {
       data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = data[1];
      }
    }
  }
}
