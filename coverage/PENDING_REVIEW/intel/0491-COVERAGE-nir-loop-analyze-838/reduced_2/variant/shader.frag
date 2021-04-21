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

layout(location = 0) out vec4 _GLF_color;

struct Obj {
 float odd_numbers[10];
 float even_numbers[10];
} ;

void main()
{
 Obj obj = Obj(float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0), float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0));
 int odd_index = 1;
 while(! (true && (! ((gl_FragCoord.x >= 1.0) && (odd_index <= 1)))))
  {
   obj.odd_numbers[_GLF_MAKE_IN_BOUNDS_INT(odd_index, 10)] = 1.0;
   odd_index ++;
  }
 vec3 col = vec3(1.0);
 col = vec3(obj.odd_numbers[1], 1.0, 1.0);
 _GLF_color.rgb = col;
}
