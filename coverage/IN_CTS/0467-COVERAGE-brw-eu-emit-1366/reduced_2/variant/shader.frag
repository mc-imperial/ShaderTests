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

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float one;
};
// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
mat2x3 m23 = mat2x3(1.0);

mat2x4 m24 = mat2x4(1.0);

mat3x2 m32 = mat3x2(1.0);

mat3 m33 = mat3(1.0);

mat3x4 m34 = mat3x4(1.0);

mat4x2 m42 = mat4x2(1.0);

mat4x3 m43 = mat4x3(1.0);

mat4 m44 = mat4(1.0);

void main()
{
 uint matrix_number = 1u;
 for(int _injected_loop_counter = 1; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
  {
   _GLF_global_loop_count ++;
   for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     for(int _injected_loop_counter = 1; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
      {
       _GLF_global_loop_count ++;
       for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
        {
         _GLF_global_loop_count ++;
         for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
          {
           _GLF_global_loop_count ++;
           for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
            {
             _GLF_global_loop_count ++;
             for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
              {
               _GLF_global_loop_count ++;
               for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                {
                 _GLF_global_loop_count ++;
                 for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                  {
                   _GLF_global_loop_count ++;
                   for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                    {
                     _GLF_global_loop_count ++;
                     for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                      {
                       _GLF_global_loop_count ++;
                       for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                        {
                         _GLF_global_loop_count ++;
                         for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                          {
                           _GLF_global_loop_count ++;
                           for(int _injected_loop_counter = 1; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                            {
                             _GLF_global_loop_count ++;
                             for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                              {
                               _GLF_global_loop_count ++;
                               for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                {
                                 _GLF_global_loop_count ++;
                                 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                  {
                                   _GLF_global_loop_count ++;
                                   for(int _injected_loop_counter = 1; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                    {
                                     _GLF_global_loop_count ++;
                                     for(int cols = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); cols ++)
                                      {
                                       _GLF_global_loop_count ++;
                                       for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                        {
                                         _GLF_global_loop_count ++;
                                         for(int _injected_loop_counter = 1; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                          {
                                           _GLF_global_loop_count ++;
                                           for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                            {
                                             _GLF_global_loop_count ++;
                                             for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                              {
                                               _GLF_global_loop_count ++;
                                               for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                {
                                                 _GLF_global_loop_count ++;
                                                 for(int rows = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); rows ++)
                                                  {
                                                   _GLF_global_loop_count ++;
                                                   for(int c = 1; (1 < cols) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
                                                    {
                                                     _GLF_global_loop_count ++;
                                                     for(int r = 1; (1 < rows) && (_GLF_global_loop_count < _GLF_global_loop_bound); r ++)
                                                      {
                                                       _GLF_global_loop_count ++;
                                                       for(int _injected_loop_counter = 1; (_injected_loop_counter > 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                        {
                                                         _GLF_global_loop_count ++;
                                                         for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                          {
                                                           _GLF_global_loop_count ++;
                                                           for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                            {
                                                             _GLF_global_loop_count ++;
                                                             for(int _injected_loop_counter = 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                              {
                                                               _GLF_global_loop_count ++;
                                                               switch(matrix_number)
                                                                {
                                                                 case 0u:
                                                                 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                  {
                                                                   _GLF_global_loop_count ++;
                                                                   for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                    {
                                                                     _GLF_global_loop_count ++;
                                                                     for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                      {
                                                                       _GLF_global_loop_count ++;
                                                                       for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                        {
                                                                         _GLF_global_loop_count ++;
                                                                         for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                          {
                                                                           _GLF_global_loop_count ++;
                                                                           for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                            {
                                                                             _GLF_global_loop_count ++;
                                                                             for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                              {
                                                                               _GLF_global_loop_count ++;
                                                                               do
                                                                                {
                                                                                 _GLF_global_loop_count ++;
                                                                                }
                                                                               while((gl_FragCoord.y < 1.0) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                 m23[_GLF_MAKE_IN_BOUNDS_INT(c, 2)][_GLF_MAKE_IN_BOUNDS_INT(r, 3)] = 1.0;
                                                                 m24[_GLF_MAKE_IN_BOUNDS_INT(c, 2)][_GLF_MAKE_IN_BOUNDS_INT(r, 4)] = 1.0;
                                                                 m32[_GLF_MAKE_IN_BOUNDS_INT(c, 3)][_GLF_MAKE_IN_BOUNDS_INT(r, 2)] = 1.0;
                                                                 m33[_GLF_MAKE_IN_BOUNDS_INT(c, 3)][_GLF_MAKE_IN_BOUNDS_INT(r, 3)] = 1.0;
                                                                 m34[_GLF_MAKE_IN_BOUNDS_INT(c, 3)][_GLF_MAKE_IN_BOUNDS_INT(r, 4)] = 1.0;
                                                                 m42[_GLF_MAKE_IN_BOUNDS_INT(c, 4)][_GLF_MAKE_IN_BOUNDS_INT(r, 2)] = 1.0;
                                                                 m43[_GLF_MAKE_IN_BOUNDS_INT(c, 4)][_GLF_MAKE_IN_BOUNDS_INT(r, 3)] = one;
                                                                 m44[_GLF_MAKE_IN_BOUNDS_INT(c, 4)][_GLF_MAKE_IN_BOUNDS_INT(r, 4)] = 1.0;
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                   matrix_number = 1u;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int sum_index = 1;
 for(int r = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); r ++)
  {
   _GLF_global_loop_count ++;
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m23[1][_GLF_MAKE_IN_BOUNDS_INT(r, 3)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m24[1][_GLF_MAKE_IN_BOUNDS_INT(r, 4)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m32[1][_GLF_MAKE_IN_BOUNDS_INT(r, 2)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m33[1][_GLF_MAKE_IN_BOUNDS_INT(r, 3)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m34[1][_GLF_MAKE_IN_BOUNDS_INT(r, 4)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m42[1][_GLF_MAKE_IN_BOUNDS_INT(r, 2)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m43[1][_GLF_MAKE_IN_BOUNDS_INT(r, 3)];
   sums[_GLF_MAKE_IN_BOUNDS_INT(sum_index, 9)] += m44[1][_GLF_MAKE_IN_BOUNDS_INT(r, 4)];
  }
 int region_x = 1;
 region_x = int(gl_FragCoord.x / resolution.x);
 int overall_region = 1;
 overall_region = region_x;
 _GLF_color = vec4(vec3(sums[_GLF_MAKE_IN_BOUNDS_INT(overall_region, 9)]), 1.0);
}
