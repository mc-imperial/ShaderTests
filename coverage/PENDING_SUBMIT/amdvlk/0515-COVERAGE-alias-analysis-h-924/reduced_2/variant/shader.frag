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
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

// Contents of GLF_dead3injectionSwitch: [0.8253075, 0.78471833]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_dead3injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

struct QuicksortObject {
 int numbers[10];
} ;

QuicksortObject obj = QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

void main()
{
 int i = 1;
 i = int(injectionSwitch.x);
 obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
 vec3 palette_inline_return_value_0 = vec3(1.0);
 vec3 b = vec3(1.0);
 b = vec3(1.0, float(obj.numbers[1]), 1.0);
 vec3 c = vec3(1.0);
 c = vec3(((injectionSwitch.x < 1.0) ? injectionSwitch : GLF_dead3injectionSwitch).y);
 palette_inline_return_value_0 = mix(vec3(1.0), c, b);
 vec3 color = vec3(1.0);
 color = palette_inline_return_value_0;
 _GLF_color = vec4(color, 1.0);
}
