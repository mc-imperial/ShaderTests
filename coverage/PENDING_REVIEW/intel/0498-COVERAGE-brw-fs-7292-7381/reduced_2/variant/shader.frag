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

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
struct BinarySearchObject {
 int prime_numbers[10];
} ;

int binarySearch(BinarySearchObject obj, int x)
{
 int l = 0;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   int m = l / 2;
   if(obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(m, 10)] == 1)
    {
     return 1;
    }
   l = 1;
  }
 return - 1;
}
void main()
{
 BinarySearchObject obj = BinarySearchObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));
 for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   for(int _injected_loop_counter = 1; (_injected_loop_counter < 7) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
    {
     _GLF_global_loop_count ++;
     for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
      {
       _GLF_global_loop_count ++;
       for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
        {
         _GLF_global_loop_count ++;
         for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
          {
           _GLF_global_loop_count ++;
           for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
            {
             _GLF_global_loop_count ++;
             for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
              {
               _GLF_global_loop_count ++;
               for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
                {
                 _GLF_global_loop_count ++;
                 for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                  {
                   _GLF_global_loop_count ++;
                   for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                    {
                     _GLF_global_loop_count ++;
                     for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                      {
                       _GLF_global_loop_count ++;
                       for(int _injected_loop_counter = int(0.0); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                        {
                         _GLF_global_loop_count ++;
                         for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                          {
                           _GLF_global_loop_count ++;
                           for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                            {
                             _GLF_global_loop_count ++;
                             for(int _injected_loop_counter = 1 ^ 1; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                              {
                               _GLF_global_loop_count ++;
                               for(int _injected_loop_counter = 3; (_injected_loop_counter > 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
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
                                       for(int _injected_loop_counter = 1; (_injected_loop_counter > int(0.0)) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                        {
                                         _GLF_global_loop_count ++;
                                         for(int _injected_loop_counter = int(0.0); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                          {
                                           _GLF_global_loop_count ++;
                                           for(int _injected_loop_counter = 6; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                            {
                                             _GLF_global_loop_count ++;
                                             for(int _injected_loop_counter = 1; (_injected_loop_counter != int(0.0)) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                              {
                                               _GLF_global_loop_count ++;
                                               for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                {
                                                 _GLF_global_loop_count ++;
                                                 for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                  {
                                                   _GLF_global_loop_count ++;
                                                   for(int _injected_loop_counter = int(0.0); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                    {
                                                     _GLF_global_loop_count ++;
                                                     for(int _injected_loop_counter = 1; (_injected_loop_counter != 21276) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                      {
                                                       _GLF_global_loop_count ++;
                                                       for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                        {
                                                         _GLF_global_loop_count ++;
                                                         for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                          {
                                                           _GLF_global_loop_count ++;
                                                           for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                            {
                                                             _GLF_global_loop_count ++;
                                                             for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                              {
                                                               _GLF_global_loop_count ++;
                                                               for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                                {
                                                                 _GLF_global_loop_count ++;
                                                                 do
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
                                                                         for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                                          {
                                                                           _GLF_global_loop_count ++;
                                                                           for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                                            {
                                                                             _GLF_global_loop_count ++;
                                                                             for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
                                                                              {
                                                                               _GLF_global_loop_count ++;
                                                                               obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(i, 10)] = 1;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
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
 vec3 color = vec3(1.0);
 if(gl_FragCoord.y < resolution.y)
  {
   color.yz -= float(binarySearch(obj, 1));
  }
 else
  {
  }
 _GLF_color = vec4(color, injectionSwitch.y);
}
