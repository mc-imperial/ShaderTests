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

layout(location = 0) out vec4 _GLF_color;

int data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

void main()
{
 int i = 1;
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i += 1)
  {
   _GLF_global_loop_count ++;
   int from = 1;
   from = i;
   {
    int from = from;
    int i = 1;
    i = from;
    data[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
   }
  }
 vec2 color = vec2(1.0);
 color = asinh(clamp(vec3(1.0), vec3(1.0), vec3(gl_FragCoord.xx, 1)).yx - float(data[1]));
 isnan(float(i)) ? 1.0 : 1.0;
 _GLF_color = vec4(vec3(color, 1.0), 1.0);
}
