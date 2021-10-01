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

precision highp int;

precision highp float;

// Contents of GLF_live7time: 0.9874064
layout(set = 0, binding = 0) uniform buf0 {
 float GLF_live7time;
};
vec3 GLF_live7defaultColor()
{
 vec4 GLF_live12c = vec4(1.0);
 int GLF_live12i = 1;
 do
  {
   GLF_live12c[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_live12i, 0, 4 - 1), 4)] = 1.0;
   GLF_live12i ++;
  }
 while(1 < findMSB(1));
 return vec3(1.0);
}
precision highp float;

precision highp int;

void main()
{
 vec2 GLF_live7square = vec2(1.0);
 GLF_live7square = vec2(GLF_live7time, 1.0);
 if(1.0 < GLF_live7square.x)
  {
   GLF_live7defaultColor();
  }
 GLF_live7defaultColor();
}
