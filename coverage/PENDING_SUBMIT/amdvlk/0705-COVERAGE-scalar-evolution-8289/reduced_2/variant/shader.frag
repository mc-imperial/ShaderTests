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
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

vec4 GLF_dead0_GLF_color = vec4(1.0);

precision highp int;

precision highp float;

int MATRIX_N = 1;

void main()
{
 MATRIX_N = 4;
 for(int k = 1; true; 1)
  {
   for(int j = 1; j < MATRIX_N; j ++)
    {
     max(GLF_dead0_GLF_color, vec4(1.0));
     if(bool(bvec4((1.0 > injectionSwitch.y), true, true, true)))
      {
       int GLF_dead0v = 1;
       int GLF_dead0i = 1;
       for(       1;
 GLF_dead0i < int(vec4(1.0, 1762.6981, 1.0, 1.0).xy.y); GLF_dead0i ++)
        {
         GLF_dead0v = (4 * GLF_dead0v);
        }
       GLF_dead0_GLF_color = vec4[16](vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0))[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead0v, 16)];
      }
    }
  }
}
