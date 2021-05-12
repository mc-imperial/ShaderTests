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

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

const float weights[9] = float[9](1.0, 1.0, 1.0, 0.5, 1.0, - 1.0, 1.0, 1.0, 1.0);

void main()
{
 vec2 coord = vec2(1.0);
 coord = gl_FragCoord.xy;
 vec4 res = vec4(1.0);
 for(int i = 0; i < 3; i ++)
  {
   for(int j = 0; j < 3; j ++)
    {
     res += min(max(min(texture(tex, coord + vec2(1.0, float(j))) * clamp(float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)], float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)], float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)]), texture(tex, vec2(1.0) + vec2(float(i), float(j))) * clamp(float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)], float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)], float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)])), max(min(texture(tex, vec2(1.0)) * float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i, 9)], texture(tex, coord) * weights[_GLF_MAKE_IN_BOUNDS_INT(3 + j, 9)]), min(vec4(1.0), texture(tex, coord + vec2(1.0)) * float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)]))) + vec4(1.0), texture(tex, coord + vec2(float(i - 1), float(j - 1))) * float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(i + j, 9)]);
    }
  }
 _GLF_color = vec4(res.xyz, 1.0);
}
