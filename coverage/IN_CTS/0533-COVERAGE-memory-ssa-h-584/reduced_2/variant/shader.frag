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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(push_constant) uniform buf_push {
 vec2 resolution;
};
void main()
{
 float A[50] = float[50](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int i = 1;
 do
  {
   _GLF_global_loop_count ++;
   if(! (! ((gl_FragCoord.y >= 1.0) && (1 >= int((true ? resolution : vec2(1.0)).x)))))
    {
     break;
    }
   if(1 == i)
    {
     A[_GLF_MAKE_IN_BOUNDS_INT(i / findLSB(16), 50)] = 1.0;
    }
   i ++;
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 _GLF_color = vec4(1.0, A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(1), 50)] / resolution.y, 1.0, 1.0);
}
