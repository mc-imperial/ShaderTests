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
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int sum_index = 1;
 for(int cols = 1; cols <= 1; cols ++)
  {
   for(int rows = 1; rows <= 4; rows ++)
    {
     if(injectionSwitch.x > injectionSwitch.y)
      {
      }
     else
      {
       do
        {
         if(injectionSwitch.x > injectionSwitch.y)
          {
          }
         else
          {
           if(gl_FragCoord.x < 1.0)
            {
            }
           else
            {
             sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += 1.0;
            }
          }
        }
       while(gl_FragCoord.y < 1.0);
      }
    }
  }
 int region_y = 1;
 region_y = int(gl_FragCoord.y);
 int overall_region = 1;
 overall_region = region_y;
 _GLF_color = vec4(vec3(sums[_GLF_MAKE_IN_BOUNDS_INT(overall_region, 9)]), 1.0);
}
