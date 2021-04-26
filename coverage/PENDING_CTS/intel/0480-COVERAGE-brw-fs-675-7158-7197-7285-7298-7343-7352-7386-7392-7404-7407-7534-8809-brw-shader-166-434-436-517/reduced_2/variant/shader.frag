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

struct Obj {
 float odd_numbers[10];
 float even_numbers[10];
} ;

void main()
{
 Obj obj = Obj(float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0), float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0));
 int odd_index = 1;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   obj.odd_numbers[_GLF_MAKE_IN_BOUNDS_INT(odd_index, 10)] = 1.0;
   odd_index ++;
  }
 for(int i = 0; (i < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   int index = 1;
   index = i;
   for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
    {
     _GLF_global_loop_count ++;
     for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
      {
       _GLF_global_loop_count ++;
       for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
        {
         _GLF_global_loop_count ++;
         for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
          {
           _GLF_global_loop_count ++;
           for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
            {
             _GLF_global_loop_count ++;
             for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
              {
               _GLF_global_loop_count ++;
               for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                {
                 _GLF_global_loop_count ++;
                 for(int _injected_loop_counter = 2; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                  {
                   _GLF_global_loop_count ++;
                   for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                    {
                     _GLF_global_loop_count ++;
                     for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                      {
                       _GLF_global_loop_count ++;
                       for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                        {
                         _GLF_global_loop_count ++;
                         for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                          {
                           _GLF_global_loop_count ++;
                           for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                            {
                             _GLF_global_loop_count ++;
                             for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                              {
                               _GLF_global_loop_count ++;
                               for(int j = i; (j < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); j ++)
                                {
                                 _GLF_global_loop_count ++;
                                 for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                  {
                                   _GLF_global_loop_count ++;
                                   for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                    {
                                     _GLF_global_loop_count ++;
                                     for(int _injected_loop_counter = 1 << 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                      {
                                       _GLF_global_loop_count ++;
                                       for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
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
                                                 for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                  {
                                                   _GLF_global_loop_count ++;
                                                   for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                    {
                                                     _GLF_global_loop_count ++;
                                                     for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                      {
                                                       _GLF_global_loop_count ++;
                                                       for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                        {
                                                         _GLF_global_loop_count ++;
                                                         for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                          {
                                                           _GLF_global_loop_count ++;
                                                           for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                            {
                                                             _GLF_global_loop_count ++;
                                                             for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                              {
                                                               _GLF_global_loop_count ++;
                                                               for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                                {
                                                                 _GLF_global_loop_count ++;
                                                                 for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                                  {
                                                                   _GLF_global_loop_count ++;
                                                                   for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                                    {
                                                                     _GLF_global_loop_count ++;
                                                                     for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                                      {
                                                                       _GLF_global_loop_count ++;
                                                                       for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                                        {
                                                                         _GLF_global_loop_count ++;
                                                                         for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                          {
                                                                           _GLF_global_loop_count ++;
                                                                           for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                            {
                                                                             _GLF_global_loop_count ++;
                                                                             for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                                              {
                                                                               _GLF_global_loop_count ++;
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
   float smaller_number = 1.0;
   smaller_number = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)[_GLF_MAKE_IN_BOUNDS_INT(index, 10)];
   obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = smaller_number;
  }
 vec3 col = vec3(1.0);
 col = vec3(obj.odd_numbers[_GLF_MAKE_IN_BOUNDS_INT(int(gl_FragCoord.x), 10)], obj.even_numbers[_GLF_MAKE_IN_BOUNDS_INT(int(gl_FragCoord.y), 10)], 1.0);
 _GLF_color.rgb = col;
}
