#version 310 es

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

mediump vec4 GLF_dead8gl_FragCoord;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 data[16];
 int i;
 int GLF_dead8j;
 vec3 GLF_dead8mand_inline_return_value_1;
 vec3 GLF_dead16pickColor_inline_return_value_0;
 GLF_dead16pickColor_inline_return_value_0 = vec3(1.0, 1.0, float(int((GLF_dead8gl_FragCoord.y + float(0 - 1)))));
 GLF_dead8mand_inline_return_value_1 = GLF_dead16pickColor_inline_return_value_0;
 data[_GLF_MAKE_IN_BOUNDS_INT(clamp(4 * GLF_dead8j + i, 0, 16 - 1), 16)] = GLF_dead8mand_inline_return_value_1;
 vec3 sum;
 sum += data[1];
 _GLF_color = vec4(sum, 1.0);
}
