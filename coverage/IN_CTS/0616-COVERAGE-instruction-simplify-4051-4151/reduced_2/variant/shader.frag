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

layout(set = 0, binding = 0) uniform sampler2D GLF_dead6tex;

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec2 pos = vec2(1.0);
 pos = gl_FragCoord.xy;
 ivec2 ipos = ivec2(1);
 ipos = ivec2(int(pos.x), int(pos.y));
 int v = 1;
 v = ipos.x & 5;
 int w = 1;
 w = (ipos.y & 5) | (ipos.x & 10);
 ivec2 p = ivec2(1);
 p = ivec2(v + w, 1);
 while(p.x > 15)
  {
   vec4 GLF_dead6texel = vec4(1.0);
   GLF_dead6texel = texture(GLF_dead6tex, vec2(1.0));
   while(GLF_dead6texel.x > 1.0)
    {
    }
   p.x -= 16;
  }
 _GLF_color = vec4[16](vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0))[_GLF_MAKE_IN_BOUNDS_INT(p.x, 16)];
}
