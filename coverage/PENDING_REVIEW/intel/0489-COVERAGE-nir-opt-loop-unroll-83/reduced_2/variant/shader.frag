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

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

mat4x2 GLF_dead8m42 = mat4x2(1.0);

precision highp int;

precision highp float;

int GLF_dead3MATRIX_N = 1;

precision highp float;

float GLF_dead4ReallyApproxNormalizedAtan2(vec2 GLF_dead4v)
{
 if(length(GLF_dead4v) < 1.0)
  {
   return 1.0;
  }
 vec2 GLF_dead4a = vec2(1.0);
 if(1.0 > GLF_dead4a.x)
  {
   if(injectionSwitch.x > 1.0)
    {
     return 1.0;
    }
  }
 else
  {
  }
 if(1.0 > injectionSwitch.y)
  {
   for(int GLF_dead8r = 1; GLF_dead8r < 1; GLF_dead8r ++)
    {
     GLF_dead8m42[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead3MATRIX_N, 0, 4 - 1), 4)][_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_dead8r, 0, 2 - 1), 2)] = 1.0;
    }
  }
 return 1.0;
}
vec2 GLF_dead4polarize()
{
 if(gl_FragCoord.y < 1.0)
  {
   return vec2(1.0);
  }
 GLF_dead4ReallyApproxNormalizedAtan2(vec2(1.0));
 return vec2(1.0);
}
precision highp int;

precision highp float;

void main()
{
 GLF_dead4polarize();
 GLF_dead4polarize();
}
