#version 320 es

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
void main()
{
 vec2 uv = vec2(1.0);
 uv = gl_FragCoord.xy / resolution.x;
 vec3 col = vec3(1.0);
 float stripe = 1.0;
 stripe = uv.x;
 col = mix(vec3(1.0), vec3(1.0, 1.0, uv.x), stripe);
 _GLF_color = vec4(col, 1.0);
 for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
  {
   _GLF_global_loop_count ++;
   do
    {
     _GLF_global_loop_count ++;
     for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
      {
       _GLF_global_loop_count ++;
       for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
        {
         _GLF_global_loop_count ++;
         for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
          {
           _GLF_global_loop_count ++;
           do
            {
             _GLF_global_loop_count ++;
             do
              {
               _GLF_global_loop_count ++;
               do
                {
                 _GLF_global_loop_count ++;
                 do
                  {
                   _GLF_global_loop_count ++;
                   for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                    {
                     _GLF_global_loop_count ++;
                     for(int _injected_loop_counter = 6; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                      {
                       _GLF_global_loop_count ++;
                       for(int _injected_loop_counter = 0; (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                        {
                         _GLF_global_loop_count ++;
                         for(int _injected_loop_counter = 1; (_injected_loop_counter != 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                          {
                           _GLF_global_loop_count ++;
                           do
                            {
                             _GLF_global_loop_count ++;
                             do
                              {
                               _GLF_global_loop_count ++;
                               do
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
                                               for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                {
                                                 _GLF_global_loop_count ++;
                                                 for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                  {
                                                   _GLF_global_loop_count ++;
                                                   for(int _injected_loop_counter = 1; (_injected_loop_counter > 0) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter --)
                                                    {
                                                     _GLF_global_loop_count ++;
                                                     do
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
                                                             do
                                                              {
                                                               _GLF_global_loop_count ++;
                                                               do
                                                                {
                                                                 _GLF_global_loop_count ++;
                                                                 do
                                                                  {
                                                                   _GLF_global_loop_count ++;
                                                                   do
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
                                                                           do
                                                                            {
                                                                             _GLF_global_loop_count ++;
                                                                             for(int _injected_loop_counter = 0; (_injected_loop_counter < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); _injected_loop_counter ++)
                                                                              {
                                                                               _GLF_global_loop_count ++;
                                                                               if(gl_FragCoord.x >= 0.0)
                                                                                {
                                                                                 return;
                                                                                }
                                                                               else
                                                                                {
                                                                                }
                                                                              }
                                                                            }
                                                                           while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                   while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                                                                  }
                                                                 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                                                                }
                                                               while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                                                              }
                                                             while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
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
                               while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                              }
                             while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                            }
                           while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                          }
                        }
                      }
                    }
                  }
                 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
                }
               while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
              }
             while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
            }
           while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
          }
        }
      }
    }
   while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
  }
 bool c2 = true;
 c2 = uv.y < 1.0;
 if(c2)
  {
   float compute_stripe_inline_return_value_1 = 1.0;
   float v = uv.x + uv.y;
   float compute_derivative_y_inline_return_value_0 = 1.0;
   {
    float v = v;
    compute_derivative_y_inline_return_value_0 = dFdy(v);
   }
   compute_stripe_inline_return_value_1 = (1.0 > injectionSwitch.x) ? 1.0 : compute_derivative_y_inline_return_value_0;
   float stripe = compute_stripe_inline_return_value_1;
   col = mix(vec3(1.0, uv.x, 1.0), vec3(1.0), stripe);
   _GLF_color = vec4(col, 1.0);
  }
}
