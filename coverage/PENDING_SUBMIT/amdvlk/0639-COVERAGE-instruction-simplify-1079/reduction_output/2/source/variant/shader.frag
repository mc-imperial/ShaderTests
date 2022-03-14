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
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_0_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of _GLF_uniform_float_values: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

int func(int x)
{
 while((x > 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   x /= 2;
  }
 return x;
}
void main()
{
 int a = int(gl_FragCoord.y);
 if(true)
  {
  }
 _GLF_color = vec4[4](vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_1, _int_0, _int_0, _int_1), vec4(_int_0), vec4(_int_0))[_GLF_MAKE_IN_BOUNDS_INT(((injectionSwitch.y > _float_0_0) ? _int_1 : func(a)), 4)];
}
