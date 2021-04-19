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

vec4 GLF_dead0_GLF_color = vec4(1.0);

precision highp float;

layout(location = 0) out vec4 _GLF_color;

mat4 m44 = mat4(1.0);

void main()
{
 for(int rows = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); rows ++)
  {
   _GLF_global_loop_count ++;
   for(int c = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
    {
     _GLF_global_loop_count ++;
     int r = 1;
     r = 0;
     GLF_dead0_GLF_color[_GLF_MAKE_IN_BOUNDS_INT(clamp(c, 0, 4 - 1), 4)] -= 1.0;
     m44[_GLF_MAKE_IN_BOUNDS_INT(clamp(rows, 0, 4 - 1), 4)][_GLF_MAKE_IN_BOUNDS_INT(clamp(r, 0, 4 - 1), 4)] = (smoothstep(vec4(1.0, 1.0, 1.0, 160.078), vec4(1.0), GLF_dead0_GLF_color)[_GLF_MAKE_IN_BOUNDS_INT(rows, 4)]);
    }
  }
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int sum_index = 1;
 int r = 1;
 r = 0;
 sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m44[1][_GLF_MAKE_IN_BOUNDS_INT(r, 4)];
 _GLF_color = vec4(vec3(sums[1]), 1.0);
}
