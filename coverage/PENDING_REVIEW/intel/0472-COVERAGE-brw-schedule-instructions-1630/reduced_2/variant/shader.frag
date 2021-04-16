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

void main()
{
 mat4 matrix_a = mat4(1.0);
 matrix_a = mat4(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 6.0, 7.0, 8.0);
 vec4 matrix_b = vec4(1.0);
 vec4 matrix_u = vec4(1.0);
 float alpha3 = 1.0;
 float beta = 1.0;
 for(int k = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); k ++)
  {
   _GLF_global_loop_count ++;
   matrix_u[_GLF_MAKE_IN_BOUNDS_INT(k, 4)] -= 1.0;
   int j = 1;
   j = k;
   for(int a = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); a --)
    {
     _GLF_global_loop_count ++;
     alpha3 += matrix_u[_GLF_MAKE_IN_BOUNDS_INT(a, 4)] * matrix_a[_GLF_MAKE_IN_BOUNDS_INT(a, 4)][_GLF_MAKE_IN_BOUNDS_INT(j, 4)];
    }
   beta = alpha3;
   int a = 1;
   matrix_a[_GLF_MAKE_IN_BOUNDS_INT(a, 4)][_GLF_MAKE_IN_BOUNDS_INT(j, 4)] = 1.0;
   if(true)
    {
     discard;
    }
   if(true)
    {
     discard;
    }
   int b = 1;
   matrix_b[_GLF_MAKE_IN_BOUNDS_INT(b, 4)] = beta;
  }
 _GLF_color = matrix_b;
}
