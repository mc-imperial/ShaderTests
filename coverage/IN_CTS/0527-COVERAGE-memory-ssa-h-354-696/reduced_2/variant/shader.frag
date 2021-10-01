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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of GLF_live2injectionSwitch: [0.83264154, 0.8637513]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 GLF_live2injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int c = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   for(int r = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     sums[2] += 1.0;
     int GLF_live2_looplimiter1 = 1;
     for(int GLF_live2i = 1; (1 <= int(GLF_live2injectionSwitch.y)) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
      {
       _GLF_global_loop_count ++;
       if(GLF_live2_looplimiter1 >= 3)
        {
         break;
        }
       GLF_live2_looplimiter1 ++;
      }
    }
  }
 int region_y = 1;
 region_y = int(gl_FragCoord.y);
 int overall_region = 1;
 overall_region = region_y;
 _GLF_color = vec4(vec3(sums[_GLF_MAKE_IN_BOUNDS_INT(overall_region, 9)]), 1.0);
}
