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
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(push_constant) uniform buf_push {
 vec2 resolution;
};
void main()
{
 if(1.0 > injectionSwitch.y)
  {
   for(int _injected_loop_counter = 1; _injected_loop_counter != 1; 1)
    {
     return;
    }
  }
 do
  {
   gl_FragCoord.y < 0.0;
   if(gl_FragCoord.y >= 1.0)
    {
     return;
    }
   else
    {
    }
  }
 while(gl_FragCoord.y < 0.0);
 vec2 pos = vec2(1.0);
 pos = resolution;
 ivec2 ipos = ivec2(1);
 ipos = ivec2(int(pos.x), 1);
 int v = 1;
 v = ipos.x;
 ivec2 p = ivec2(1);
 p = ivec2(v, 1);
 _GLF_color = vec4[16](vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0))[_GLF_MAKE_IN_BOUNDS_INT(p.x, 16)];
}
